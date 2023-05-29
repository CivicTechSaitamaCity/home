import os
import yaml
import csv
from pathlib import Path

def extract_yaml_header(md_file):
    with open(md_file, 'r') as file:
        lines = file.readlines()

    yaml_header = []
    if lines[0].strip() == '---':
        for line in lines[1:]:
            if line.strip() == '---':
                break
            yaml_header.append(line)
    return '\n'.join(yaml_header)

def markdown_files_in(directory):
    return Path(directory).rglob('*.md')

data_directory = './data'
csv_filename = 'output.csv'
csv_header = ['title', 'date', 'eventDate', 'link', 'thumb']

with open(csv_filename, 'w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=csv_header)
    writer.writeheader()

    for markdown_file in markdown_files_in(data_directory):
        yaml_header = extract_yaml_header(markdown_file)
        yaml_dict = yaml.safe_load(yaml_header) if yaml_header else {}

        row = {field: yaml_dict.get(field, '') for field in csv_header}
        writer.writerow(row)
