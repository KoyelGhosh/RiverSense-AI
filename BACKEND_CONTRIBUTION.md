# ⚙️ Backend Architecture & Data Pipeline
**Developer:** Koyel Ghosh  
**Role:** Backend Engineering & Integration  

## 🚀 Overview
For the RiverSense AI project, I architected and developed the core backend decision engine. My primary focus was building a high-performance, non-blocking API that could ingest raw genomic data, execute our custom ecological scoring algorithms, and trigger asynchronous emergency alerts without slowing down the user experience.

## 🛠️ Core Contributions

### 1. The FastAPI Application Layer
* Designed a scalable REST API using **Python** and **FastAPI**.
* Configured Uvicorn as the high-performance ASGI server for local development and production deployment.
* Structured modular routing systems to cleanly separate file uploads, ML inference, and report generation.

### 2. Ecological Decision Engine (Algorithm Design)
* Developed the parsing logic to ingest raw TSV taxonomic reports from bioinformatics tools (Kraken2).
* Engineered the `calculate_score` algorithm, which cross-references detected bacterial genomes against our custom `ECOLOGICAL_MAP`. 
* Built aggressive mathematical penalty systems to accurately calculate the **Biodiversity Health Score (0-100)** based on weighted pollution indicators (e.g., *Pseudomonas aeruginosa* triggers a 3x heavy pollution multiplier).

### 3. Asynchronous Alerting Pipeline
* Integrated a zero-click, automated notification system using Python's `smtplib` and `email.message`.
* Leveraged FastAPI's `BackgroundTasks` to ensure that PDF report generation and SMTP network requests execute entirely in the background, keeping the main thread lightning fast.
* Wired the ML output to trigger three distinct alert tiers:
  * **Critical Collapse** (Health Score < 30) -> Alerts Jal Shakti Ministry
  * **Heavy Contamination** (Bacterial Blooms) -> Alerts CPCB
  * **Extinction Risk** -> Alerts Wildlife Crime Control Bureau

### 4. Database Integration
* Utilized **SQLAlchemy** to build an SQLite relational database mapping.
* Structured data models to persistently track `Uploads`, `AnalysisResults`, and generated `Alerts` for historical telemetry and frontend dashboard visualization.

## 💻 Technical Stack Used
* **Framework:** FastAPI, Uvicorn
* **Language:** Python 3.x
* **Database:** SQLAlchemy (ORM)
* **Data Processing:** Pandas
* **Protocols:** SMTP (SSL/TLS integration)
