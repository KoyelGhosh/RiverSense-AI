# 🌊 RiverSense AI
**AI-powered eDNA analysis for Indian river health monitoring**

*Team Creatus · Biothon 2026 · Marwadi University · Top 50 Nationally*

RiverSense AI reads environmental DNA (eDNA) extracted from river water samples, classifies biological communities using AI, and generates a real-time **Biodiversity Health Score** — automatically alerting government agencies when a river is at risk.

---

## ⚠️ The Problem
River health monitoring in India is manual, infrequent, and slow. By the time lab results confirm a pollution event, the damage is already done. Currently, no automated early-warning system exists for Indian agencies to proactively manage aquatic ecosystems.

## 💡 What RiverSense AI Does
* **Sequences:** Pulls real metagenomic eDNA data from river samples (Source: NCBI-SRA, Ganga river, run SRR8837334).
* **Classifies:** Runs Kraken2 taxonomic classification on organisms present in the water sample.
* **Scores:** Computes a 0–100 Biodiversity Health Score from the abundance profile.
* **Alerts:** Sends an automated email directly to government agencies when the score crosses a critical risk threshold.

## 🚨 Automated Government Alerts
When a river scores below the healthy threshold, the RiverSense AI decision engine automatically dispatches an alert email (via Gmail SMTP) to targeted authorities:

* **CPCB** — Central Pollution Control Board
* **Jal Shakti Ministry** — National Water Resource Authority
* **WCCB** — Wildlife Crime Control Bureau
* **NFDB** — National Fisheries Development Board

*No manual trigger is needed. The pipeline runs, scores the river, and sends the alert — end to end.*

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **ML / AI** | DNABERT (fine-tuned), Kraken2, Gemini 1.5 Flash |
| **Backend** | FastAPI, SQLAlchemy (SQLite), Redis |
| **Frontend** | React, Tailwind CSS |
| **Alerts** | Gmail SMTP |
| **Data** | NCBI-SRA (SRR8837334) |

---

## 👥 Team Contributions

* **TEAM LEADER:** Thivisha 
  * **Role:** AI/ML Pipeline (DNABERT Fine-tuning and Automation)
  * 📄 *See [ML_CONTRIBUTION.md](ML_CONTRIBUTION.md) for details.*
* **TEAM MEMBER:** Koyel Ghosh 
  * **Role:** Backend Architecture (FastAPI + SQLAlchemy + Alert Pipeline)
  * 📄 *See [BACKEND_CONTRIBUTION.md](BACKEND_CONTRIBUTION.md) for details.*
* **TEAM MEMBER:** Swati Ghara 
  * **Role:** Frontend Dashboard (React + Tailwind)
  * 📄 *See FRONTEND_CONTRIBUTION.md for details.*

---

## 🚀 Running the Project

### Frontend (Next.js)
```bash
npm install
npm run dev

```

*Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the application.*

### Backend (FastAPI)

**1. Clone the repository and navigate to the backend directory:**

```bash
git clone [https://github.com/your-username/RiverSense-AI.git](https://github.com/your-username/RiverSense-AI.git)
cd Riversense-backend

```

**2. Create and activate a virtual environment:**

* **Windows:**
```cmd
python -m venv venv
venv\Scripts\activate

```


* **Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate

```



**3. Install the required dependencies:**

```bash
pip install -r requirements.txt

```

**4. Configure the Email Alert System:**
For the automated reporting pipeline to work, you must configure your SMTP credentials. Create a `.env` file in the backend root directory (or update your environment variables) with:

```env
SENDER_EMAIL="your-email@gmail.com"
SENDER_PASSWORD="your-16-character-gmail-app-password"

```

**5. Start the Live Server:**

```bash
uvicorn app.main:app --reload

```

*The API will be live at [http://127.0.0.1:8000](http://127.0.0.1:8000). You can test the endpoints and view the auto-generated Swagger documentation at [http://127.0.0.1:8000/docs](https://www.google.com/search?q=http://127.0.0.1:8000/docs).*

---

## 🧬 Data Source

Real metagenomic sequencing data from the Ganga river:

* **Study:** SRP190174
* **Run:** SRR8837334
* **Source:** NCBI Sequence Read Archive

> **Built for Biothon 2026 — Environment & Biodiversity Track**

```

```
