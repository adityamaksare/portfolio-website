export const personalInfo = {
  name: "Aditya Maksare",
  role: "Data Engineer",
  location: "Pune, Maharashtra, India",
  email: "adityamaksare@outlook.com",
  linkedin: "https://www.linkedin.com/in/adityamaksare/",
  github: "https://github.com/adityamaksare",
  resumeUrl: "/Aditya-Maksare-Resume.pdf",
  tagline: "Data Engineer specializing in real-time streaming pipelines with Apache Kafka and PySpark. Built production-grade fraud detection system achieving 95%+ accuracy with sub-500ms latency. Passionate about designing fault-tolerant data infrastructure that scales.",
  about: [
    "I'm a Data Engineer specializing in building real-time streaming pipelines and fault-tolerant data infrastructure. With expertise in Apache Kafka, PySpark Structured Streaming, and modern data engineering practices, I design scalable solutions that process thousands of events per second with zero data loss.",
    "My focus is on creating production-grade data platforms that combine stream processing, event-driven architectures, and robust data quality frameworks. I'm passionate about solving complex data challenges at fintech companies and startups where reliability and performance are critical.",
    "Currently expanding my expertise in cloud-native data engineering with AWS and workflow orchestration with Apache Airflow."
  ],
  targetRole: "Data Engineer",
  experience: "Fresher (0 YOE)",
  targetSalary: "12-16 LPA",
  targetCompanies: ["Razorpay", "Cashfree", "Stripe", "Zobyt", "CloudRedux"]
};

export const skills = {
  "Data Engineering & Stream Processing": [
    "Apache Kafka",
    "PySpark Structured Streaming",
    "Real-Time Data Pipelines",
    "ETL/ELT",
    "Stream Processing",
    "Data Quality Validation",
    "Event-Driven Architecture"
  ],
  "Programming & Databases": [
    "Python",
    "Flask",
    "MongoDB",
    "SQL",
    "Aggregation Pipelines",
    "Database Indexing"
  ],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "Linux/Unix",
    "Microservices Architecture"
  ],
  "AI/ML Integration": [
    "LangChain",
    "Llama 3 (8B)",
    "Ollama",
    "Prompt Engineering",
    "LLM Integration"
  ]
};

export const projects = [
  {
    id: "fraud-detection",
    title: "AI-Powered Real-Time Fraud Detection System",
    shortDescription: "Real-time streaming pipeline with LLM-powered fraud classification achieving 95%+ accuracy",
    description: "Built a production-grade fraud detection system that processes 14,400+ daily transactions in real-time using Apache Kafka and PySpark Structured Streaming. Integrated Llama 3 (8B) via LangChain for intelligent fraud classification, achieving 95%+ accuracy with 200-500ms latency. Implemented comprehensive fault-tolerance with checkpointing, retry logic (3 attempts), and dead-letter queues for data quality assurance.",
    techStack: [
      "Apache Kafka",
      "PySpark Structured Streaming",
      "Llama 3 (8B)",
      "LangChain",
      "MongoDB",
      "Docker",
      "Flask",
      "React.js"
    ],
    metrics: [
      { label: "Daily Transactions", value: "14,400+" },
      { label: "Accuracy", value: "95%+" },
      { label: "Latency", value: "200-500ms" },
      { label: "Data Loss", value: "Zero" }
    ],
    highlights: [
      "Real-time streaming ETL pipeline with fault-tolerant architecture",
      "LLM-powered fraud classification with custom prompt engineering",
      "PySpark checkpointing and retry logic (3 attempts) for reliability",
      "Data quality framework with Dead Letter Queue (DLQ) pattern",
      "Microservices architecture with 5 independent services",
      "Automated error handling and monitoring"
    ],
    technicalDetails: [
      "Kafka Producer/Consumer APIs with topic partitioning for scalability",
      "PySpark Structured Streaming with micro-batch processing",
      "Watermark management (10-minute watermarks) for late-arriving data",
      "MongoDB aggregation pipelines for real-time analytics",
      "Docker Compose orchestration for multi-service deployment",
      "React.js dashboard for real-time monitoring"
    ],
    githubUrl: "https://github.com/yourusername/fraud-detection",
    liveUrl: "",
    featured: true
  },
  {
    id: "weather-analytics",
    title: "Real-Time Weather Analytics Pipeline",
    shortDescription: "End-to-end streaming ETL pipeline with windowed aggregations and multi-sink output",
    description: "Developed a real-time weather analytics platform that ingests, validates, and processes weather data from 5 cities with 1,440+ daily records. Implemented a 3-layer architecture (Ingestion → Validation → Business Logic) using Apache Spark Structured Streaming with 5-minute tumbling windows and 10-minute watermarks. Features multi-sink output to Kafka topics and MongoDB with automated DLQ routing for data quality.",
    techStack: [
      "Apache Spark",
      "Apache Kafka",
      "PySpark Structured Streaming",
      "MongoDB",
      "Docker",
      "Python",
      "Open-Meteo API"
    ],
    metrics: [
      { label: "Daily Records", value: "1,440+" },
      { label: "Cities Tracked", value: "5" },
      { label: "Validation Layers", value: "3" },
      { label: "Processing Window", value: "5min" }
    ],
    highlights: [
      "End-to-end streaming ETL pipeline with Open-Meteo API integration",
      "3-layer architecture: Ingestion → Validation → Business Logic",
      "Windowed time-series aggregations (5-min tumbling windows)",
      "10-minute watermarks for handling late-arriving events",
      "Multi-sink output: Kafka topics + MongoDB collections",
      "Automated data validation with DLQ routing for bad records"
    ],
    technicalDetails: [
      "PySpark Structured Streaming for real-time data processing",
      "Kafka topic-based data flow with partitioning strategy",
      "MongoDB time-series collections for analytics storage",
      "Schema validation and data quality checks at each layer",
      "Checkpointing mechanism for exactly-once processing semantics",
      "Docker containerization for reproducible deployments"
    ],
    githubUrl: "https://github.com/yourusername/weather-analytics",
    liveUrl: "",
    featured: true
  }
];

export const journey = [
  {
    id: 1,
    period: "Jan 2025",
    title: "Started Data Engineering Journey",
    description: "Began learning Python, SQL, and fundamental data engineering concepts",
    type: "learning",
    status: "completed"
  },
  {
    id: 2,
    period: "Feb - Mar 2025",
    title: "Mastered Apache Kafka & PySpark",
    description: "Deep-dived into stream processing, fault-tolerance, and real-time data engineering with hands-on projects",
    type: "learning",
    status: "completed"
  },
  {
    id: 3,
    period: "Apr 2025",
    title: "Built Real-Time Weather Analytics Pipeline",
    description: "End-to-end streaming ETL with windowed aggregations, multi-sink architecture, and DLQ pattern",
    type: "project",
    status: "completed"
  },
  {
    id: 4,
    period: "May - Jun 2025",
    title: "Built AI-Powered Fraud Detection System",
    description: "Production-grade streaming pipeline with LLM integration achieving 95%+ accuracy and sub-500ms latency",
    type: "project",
    status: "completed"
  },
  {
    id: 5,
    period: "Jul 2025",
    title: "IBM Generative AI Engineering Specialization",
    description: "Expanding expertise in AI/ML integration for data pipelines and LLM applications",
    type: "certification",
    status: "in-progress"
  },
  {
    id: 6,
    period: "Aug - Dec 2025",
    title: "Learning Apache Airflow & AWS",
    description: "Workflow orchestration and cloud-native data engineering with AWS (S3, EMR, Lambda)",
    type: "learning",
    status: "in-progress"
  }
];

export const currentlyLearning = [
  "Apache Airflow for workflow orchestration",
  "AWS (S3, EMR, Lambda) for cloud-native data engineering",
  "Apache Flink for advanced stream processing",
  "dbt for analytics engineering"
];

export const testimonials = [
  {
    id: 1,
    name: "Coming Soon",
    role: "Position",
    company: "Company",
    content: "Add your recommendations and testimonials here.",
    avatar: ""
  }
];

export const socialLinks = {
  github: "https://github.com/adityamaksare",
  linkedin: "https://www.linkedin.com/in/adityamaksare/",
  email: "adityamaksare@outlook.com",
  twitter: ""
};
