---
permalink: /projects/
title: "Projects"
---
# Patent Infringement Checker

A web-based tool for evaluating potential patent infringement risks. It analyzes a given patent ID against company products using an advanced Language Model (LLM).

## Key Features
- **Infringement Analysis**: Identifies products potentially infringing on a patent.
- **Comprehensive Reports**: Provides likelihood assessment, relevant claims, and key features.
- **User-Friendly Interface**: Simple web-based tool for analysis and review.
- **Report Management**: Save and access past analyses.

## Project Structure
```
patent_infringement_app/
├── app.py                  # Main application
├── models.py               # Analysis logic
├── templates/
│   ├── index.html          # Input form & results
│   ├── reports.html        # Saved reports
├── Dockerfile              # Containerization setup
├── patents.json            # Patent data
├── company_products.json   # Product data
├── README.md               # Documentation
├── requirements.txt        # Dependencies
```

## Running the Application
Using Docker:
```sh
docker build -t patent_infringement_checker .
docker run -p 5001:5001 patent_infringement_checker
```
Access the tool at [http://localhost:5001](http://localhost:5001).

## Screenshot
![App Screenshot](resources/patent_infringement.png)

