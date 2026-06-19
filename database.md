# Database

## users

- id
- email
- role
- created_at

## projects

- id
- title
- owner_id
- show_id
- created_at
- updated_at

## project_versions

- id
- project_id
- version_number
- snapshot_json
- created_at

## shows

- id
- name
- logo_url

## hosts

- id
- show_id
- name

## host_poses

- id
- host_id
- name
- image_url

## assets

- id
- type
- owner_id
- url