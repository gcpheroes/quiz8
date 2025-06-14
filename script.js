// script.js

// ─── Question Data ─────────────────────────────────────────────────────────
const questions = [
  {
    "question": "Your company is migrating its on-premises data center into the cloud. As part of the migration, you want to integrate Google Kubernetes Engine (GKE) for workload orchestration. Parts of your architecture must also be PCI DSS-compliant. \n\nWhich of the following is most accurate?",
    "options": [
      "App Engine is the only compute platform on GCP that is certified for PCI DSS hosting.",
      "GKE cannot be used under PCI DSS because it is considered shared hosting.",
      "GKE and GCP provide the tools you need to build a PCI DSS-compliant environment.",
      "All Google Cloud services are usable because Google Cloud Platform is certified PCI-compliant."
    ],
    "answer": [
      "GKE and GCP provide the tools you need to build a PCI DSS-compliant environment."
    ],
    "multiple": false
  },
  {
    "question": "Your company has multiple on-premises systems that serve as sources for reporting. The data has not been maintained well and has become degraded over time.\nYou want to use Google-recommended practices to detect anomalies in your company data. \n\nWhat should you do?",
    "options": [
      "Upload your files into Cloud Storage. Use Cloud Datalab to explore and clean your data.",
      "Upload your files into Cloud Storage. Use Cloud Dataprep to explore and clean your data.",
      "Connect Cloud Datalab to your on-premises systems. Use Cloud Datalab to explore and clean your data.",
      "Connect Cloud Dataprep to your on-premises systems. Use Cloud Dataprep to explore and clean your data."
    ],
    "answer": [
      "Upload your files into Cloud Storage. Use Cloud Dataprep to explore and clean your data."
    ],
    "multiple": false
  },
  {
    "question": "Google Cloud Platform resources are managed hierarchically using organization, folders, and projects. When Cloud Identity and Access Management (IAM) policies exist at these different levels, what is the effective policy at a particular node of the hierarchy?",
    "options": [
      "The effective policy is determined only by the policy set at the node",
      "The effective policy is the policy set at the node and restricted by the policies of its ancestors",
      "The effective policy is the union of the policy set at the node and policies inherited from its ancestors",
      "The effective policy is the intersection of the policy set at the node and policies inherited from its ancestors"
    ],
    "answer": [
      "The effective policy is the union of the policy set at the node and policies inherited from its ancestors"
    ],
    "multiple": false
  },
  {
    "question": "You are migrating your on-premises solution to Google Cloud in several phases. You will use Cloud VPN to maintain a connection between your on-premises systems and Google Cloud until the migration is completed. You want to make sure all your on-premise systems remain reachable during this period. \n\nHow should you organize your networking in Google Cloud?",
    "options": [
      "Use the same IP range on Google Cloud as you use on-premises",
      "Use the same IP range on Google Cloud as you use on-premises for your primary IP range and use a secondary range that does not overlap with the range you use on-premises",
      "Use an IP range on Google Cloud that does not overlap with the range you use on-premises",
      "Use an IP range on Google Cloud that does not overlap with the range you use on-premises for your primary IP range and use a secondary range with the same IP range as you use on-premises"
    ],
    "answer": [
      "Use an IP range on Google Cloud that does not overlap with the range you use on-premises"
    ],
    "multiple": false
  },
  {
    "question": "You have found an error in your App Engine application caused by missing Cloud Datastore indexes. You have created a YAML file with the required indexes and want to deploy these new indexes to Cloud Datastore. \n\nWhat should you do?",
    "options": [
      "Point gcloud datastore create-indexes to your configuration file",
      "Upload the configuration file to App Engine's default Cloud Storage bucket, and have App Engine detect the new indexes",
      "In the GCP Console, use Datastore Admin to delete the current indexes and upload the new configuration file",
      "Create an HTTP request to the built-in python module to send the index configuration file to your application"
    ],
    "answer": [
      "Point gcloud datastore create-indexes to your configuration file"
    ],
    "multiple": false
  },
  {
    "question": "You have an application that will run on Compute Engine. You need to design an architecture that takes into account a disaster recovery plan that requires your application to fail over to another region in case of a regional outage. \n\nWhat should you do?",
    "options": [
      "Deploy the application on two Compute Engine instances in the same project but in a different region. Use the first instance to serve traffic, and use the HTTP load balancing service to fail over to the standby instance in case of a disaster.",
      "Deploy the application on a Compute Engine instance. Use the instance to serve traffic, and use the HTTP load balancing service to fail over to an instance on your premises in case of a disaster.",
      "Deploy the application on two Compute Engine instance groups, each in the same project but in a different region. Use the first instance group to serve traffic, and use the HTTP load balancing service to fail over to the standby instance group in case of a disaster.",
      "Deploy the application on two Compute Engine instance groups, each in a separate project and a different region. Use the first instance group to serve traffic, and use the HTTP load balancing service to fail over to the standby instance group in case of a disaster."
    ],
    "answer": [
      "Deploy the application on two Compute Engine instance groups, each in the same project but in a different region. Use the first instance group to serve traffic, and use the HTTP load balancing service to fail over to the standby instance group in case of a disaster."
    ],
    "multiple": false
  },
  {
    "question": "You are deploying an application on App Engine that needs to integrate with an on-premises database. For security purposes, your on-premises database must not be accessible through the public internet. \n\nWhat should you do?",
    "options": [
      "Deploy your application on App Engine standard environment and use App Engine firewall rules to limit access to the open on-premises database.",
      "Deploy your application on App Engine standard environment and use Cloud VPN to limit access to the on-premises database.",
      "Deploy your application on App Engine flexible environment and use App Engine firewall rules to limit access to the on-premises database.",
      "Deploy your application on App Engine flexible environment and use Cloud VPN to limit access to the on-premises database."
    ],
    "answer": [
      "Deploy your application on App Engine flexible environment and use Cloud VPN to limit access to the on-premises database."
    ],
    "multiple": false
  },
  {
    "question": "You are working in a highly secured environment where public Internet access from the Compute Engine VMs is not allowed. You do not yet have a VPN connection to access an on-premises file server. You need to install specific software on a Compute Engine instance. \n\nHow should you install the software?",
    "options": [
      "Upload the required installation files to Cloud Storage. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gsutil.",
      "Upload the required installation files to Cloud Storage and use firewall rules to block all traffic except the IP address range for Cloud Storage. Download the files to the VM using gsutil.",
      "Upload the required installation files to Cloud Source Repositories. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gcloud.",
      "Upload the required installation files to Cloud Source Repositories and use firewall rules to block all traffic except the IP address range for Cloud Source Repositories. Download the files to the VM using gsutil."
    ],
    "answer": [
      "Upload the required installation files to Cloud Storage. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gsutil."
    ],
    "multiple": false
  },
  {
    "question": "Your company is moving 75 TB of data into Google Cloud. You want to use Cloud Storage and follow Google-recommended practices. \n\nWhat should you do?",
    "options": [
      "Move your data onto a Transfer Appliance. Use a Transfer Appliance Rehydrator to decrypt the data into Cloud Storage.",
      "Move your data onto a Transfer Appliance. Use Cloud Dataprep to decrypt the data into Cloud Storage.",
      "Install gsutil on each server that contains data. Use resumable transfers to upload the data into Cloud Storage.",
      "Install gsutil on each server containing data. Use streaming transfers to upload the data into Cloud Storage."
    ],
    "answer": [
      "Move your data onto a Transfer Appliance. Use a Transfer Appliance Rehydrator to decrypt the data into Cloud Storage."
    ],
    "multiple": false
  },
  {
    "question": "You have an application deployed on Google Kubernetes Engine using a Deployment named echo-deployment. The deployment is exposed using a Service called echo-service. You need to perform an update to the application with minimal downtime to the application. \n\nWhat should you do?",
    "options": [
      "Use kubectl set image deployment/echo-deployment <new-image>",
      "Use the rolling update functionality of the Instance Group behind the Kubernetes cluster",
      "Update the deployment yaml file with the new container image. Use kubectl delete deployment/echo-deployment and kubectl create \u05d2\u20ac\"f <yaml-file>",
      "Update the service yaml file which the new container image. Use kubectl delete service/echo-service and kubectl create \u05d2\u20ac\"f <yaml-file>"
    ],
    "answer": [
      "Use kubectl set image deployment/echo-deployment <new-image>"
    ],
    "multiple": false
  },
  {
    "question": "Your company is using BigQuery as its enterprise data warehouse. Data is distributed over several Google Cloud projects. All queries on BigQuery need to be billed on a single project. You want to make sure that no query costs are incurred on the projects that contain the data. Users should be able to query the datasets, but not edit them.\n\nHow should you configure users' access roles?",
    "options": [
      "Add all users to a group. Grant the group the role of BigQuery user on the billing project and BigQuery dataViewer on the projects that contain the data.",
      "Add all users to a group. Grant the group the roles of BigQuery dataViewer on the billing project and BigQuery user on the projects that contain the data.",
      "Add all users to a group. Grant the group the roles of BigQuery jobUser on the billing project and BigQuery dataViewer on the projects that contain the data.",
      "Add all users to a group. Grant the group the roles of BigQuery dataViewer on the billing project and BigQuery jobUser on the projects that contain the data."
    ],
    "answer": [
      "Add all users to a group. Grant the group the roles of BigQuery jobUser on the billing project and BigQuery dataViewer on the projects that contain the data."
    ],
    "multiple": false
  },
  {
    "question": "You have developed an application using Cloud ML Engine that recognizes famous paintings from uploaded images. You want to test the application and allow specific people to upload images for the next 24 hours. Not all users have a Google Account. \n\nHow should you have users upload images?",
    "options": [
      "Have users upload the images to Cloud Storage. Protect the bucket with a password that expires after 24 hours.",
      "Have users upload the images to Cloud Storage using a signed URL that expires after 24 hours.",
      "Create an App Engine web application where users can upload images. Configure App Engine to disable the application after 24 hours. Authenticate users via Cloud Identity.",
      "Create an App Engine web application where users can upload images for the next 24 hours. Authenticate users via Cloud Identity."
    ],
    "answer": [
      "Have users upload the images to Cloud Storage using a signed URL that expires after 24 hours."
    ],
    "multiple": false
  },
  {
    "question": "Your web application must comply with the requirements of the European Union's General Data Protection Regulation (GDPR). You are responsible for the technical architecture of your web application. \n\nWhat should you do?",
    "options": [
      "Ensure that your web application only uses native features and services of Google Cloud Platform, because Google already has various certifications and provides \u05d2\u20acpass-on\u05d2\u20ac compliance when you use native features.",
      "Enable the relevant GDPR compliance setting within the GCPConsole for each of the services in use within your application.",
      "Ensure that Cloud Security Scanner is part of your test planning strategy in order to pick up any compliance gaps.",
      "Define a design for the security of data in your web application that meets GDPR requirements."
    ],
    "answer": [
      "Define a design for the security of data in your web application that meets GDPR requirements."
    ],
    "multiple": false
  },
  {
    "question": "You need to set up Microsoft SQL Server on GCP. Management requires that there's no downtime in case of a data center outage in any of the zones within a GCP region. \n\nWhat should you do?",
    "options": [
      "Configure a Cloud SQL instance with high availability enabled.",
      "Configure a Cloud Spanner instance with a regional instance configuration.",
      "Set up SQL Server on Compute Engine, using Always On Availability Groups using Windows Failover Clustering. Place nodes in different subnets.",
      "Set up SQL Server Always On Availability Groups using Windows Failover Clustering. Place nodes in different zones."
    ],
    "answer": [
      "Set up SQL Server Always On Availability Groups using Windows Failover Clustering. Place nodes in different zones."
    ],
    "multiple": false
  },
  {
    "question": "The development team has provided you with a Kubernetes Deployment file. You have no infrastructure yet and need to deploy the application. \n\nWhat should you do?",
    "options": [
      "Use gcloud to create a Kubernetes cluster. Use Deployment Manager to create the deployment.",
      "Use gcloud to create a Kubernetes cluster. Use kubectl to create the deployment.",
      "Use kubectl to create a Kubernetes cluster. Use Deployment Manager to create the deployment.",
      "Use kubectl to create a Kubernetes cluster. Use kubectl to create the deployment."
    ],
    "answer": [
      "Use gcloud to create a Kubernetes cluster. Use kubectl to create the deployment."
    ],
    "multiple": false
  },
  {
    "question": "You need to evaluate your team readiness for a new GCP project. You must perform the evaluation and create a skills gap plan which incorporates the business goal of cost optimization. Your team has deployed two GCP projects successfully to date. \n\nWhat should you do?",
    "options": [
      "Allocate budget for team training. Set a deadline for the new GCP project.",
      "Allocate budget for team training. Create a roadmap for your team to achieve Google Cloud certification based on job role.",
      "Allocate budget to hire skilled external consultants. Set a deadline for the new GCP project.",
      "Allocate budget to hire skilled external consultants. Create a roadmap for your team to achieve Google Cloud certification based on job role."
    ],
    "answer": [
      "Allocate budget for team training. Create a roadmap for your team to achieve Google Cloud certification based on job role."
    ],
    "multiple": false
  },
  {
    "question": "You are designing an application for use only during business hours. For the minimum viable product release, you'd like to use a managed product that automatically `scales to zero` so you don't incur costs when there is no activity.\n\nWhich primary compute resource should you choose?",
    "options": [
      "Cloud Functions",
      "Compute Engine",
      "Google Kubernetes Engine",
      "AppEngine flexible environment"
    ],
    "answer": [
      "Cloud Functions"
    ],
    "multiple": false
  },
  {
    "question": "You are creating an App Engine application that uses Cloud Datastore as its persistence layer. You need to retrieve several root entities for which you have the identifiers. You want to minimize the overhead in operations performed by Cloud Datastore. \n\nWhat should you do?",
    "options": [
      "Create the Key object for each Entity and run a batch get operation",
      "Create the Key object for each Entity and run multiple get operations, one operation for each entity",
      "Use the identifiers to create a query filter and run a batch query operation",
      "Use the identifiers to create a query filter and run multiple query operations, one operation for each entity"
    ],
    "answer": [
      "Create the Key object for each Entity and run a batch get operation"
    ],
    "multiple": false
  },
  {
    "question": "You need to upload files from your on-premises environment to Cloud Storage. You want the files to be encrypted on Cloud Storage using customer-supplied encryption keys. \n\nWhat should you do?",
    "options": [
      "Supply the encryption key in a .boto configuration file. Use gsutil to upload the files.",
      "Supply the encryption key using gcloud config. Use gsutil to upload the files to that bucket.",
      "Use gsutil to upload the files, and use the flag --encryption-key to supply the encryption key.",
      "Use gsutil to create a bucket, and use the flag --encryption-key to supply the encryption key. Use gsutil to upload the files to that bucket."
    ],
    "answer": [
      "Supply the encryption key in a .boto configuration file. Use gsutil to upload the files."
    ],
    "multiple": false
  },
  {
    "question": "Your customer wants to capture multiple GBs of aggregate real-time key performance indicators (KPIs) from their game servers running on Google Cloud Platform and monitor the KPIs with low latency. \n\nHow should they capture the KPIs?",
    "options": [
      "Store time-series data from the game servers in Google Bigtable, and view it using Google Data Studio.",
      "Output custom metrics to Stackdriver from the game servers, and create a Dashboard in Stackdriver Monitoring Console to view them.",
      "Schedule BigQuery load jobs to ingest analytics files uploaded to Cloud Storage every ten minutes, and visualize the results in Google Data Studio.",
      "Insert the KPIs into Cloud Datastore entities, and run ad hoc analysis and visualizations of them in Cloud Datalab."
    ],
    "answer": [
      "Output custom metrics to Stackdriver from the game servers, and create a Dashboard in Stackdriver Monitoring Console to view them."
    ],
    "multiple": false
  },
  {
    "question": "You have a Python web application with many dependencies that requires 0.1 CPU cores and 128 MB of memory to operate in production. You want to monitor and maximize machine utilization. You also want to reliably deploy new versions of the application. \n\nWhich set of steps should you take?",
    "options": [
      "Perform the following: 1. Create a managed instance group with f1-micro type machines. 2. Use a startup script to clone the repository, check out the production branch, install the dependencies, and start the Python app. 3. Restart the instances to automatically deploy new production releases.",
      "Perform the following: 1. Create a managed instance group with n1-standard-1 type machines. 2. Build a Compute Engine image from the production branch that contains all of the dependencies and automatically starts the Python app. 3. Rebuild the Compute Engine image, and update the instance template to deploy new production releases.",
      "Perform the following: 1. Create a Google Kubernetes Engine (GKE) cluster with n1-standard-1 type machines. 2. Build a Docker image from the production branch with all of the dependencies, and tag it with the version number. 3. Create a Kubernetes Deployment with the imagePullPolicy set to 'IfNotPresent' in the staging namespace, and then promote it to the production namespace after testing.",
      "Perform the following: 1. Create a GKE cluster with n1-standard-4 type machines. 2. Build a Docker image from the master branch with all of the dependencies, and tag it with 'latest'. 3. Create a Kubernetes Deployment in the default namespace with the imagePullPolicy set to 'Always'. Restart the pods to automatically deploy new production releases."
    ],
    "answer": [
      "Perform the following: 1. Create a Google Kubernetes Engine (GKE) cluster with n1-standard-1 type machines. 2. Build a Docker image from the production branch with all of the dependencies, and tag it with the version number. 3. Create a Kubernetes Deployment with the imagePullPolicy set to 'IfNotPresent' in the staging namespace, and then promote it to the production namespace after testing."
    ],
    "multiple": false
  },
  {
    "question": "Your company wants to start using Google Cloud resources but wants to retain their on-premises Active Directory domain controller for identity management.\n\nWhat should you do?",
    "options": [
      "Use the Admin Directory API to authenticate against the Active Directory domain controller.",
      "Use Google Cloud Directory Sync to synchronize Active Directory usernames with cloud identities and configure SAML SSO.",
      "Use Cloud Identity-Aware Proxy configured to use the on-premises Active Directory domain controller as an identity provider.",
      "Use Compute Engine to create an Active Directory (AD) domain controller that is a replica of the on-premises AD domain controller using Google Cloud Directory Sync."
    ],
    "answer": [
      "Use Google Cloud Directory Sync to synchronize Active Directory usernames with cloud identities and configure SAML SSO."
    ],
    "multiple": false
  },
  {
    "question": "You are running a cluster on Kubernetes Engine (GKE) to serve a web application. Users are reporting that a specific part of the application is not responding anymore. You notice that all pods of your deployment keep restarting after 2 seconds. The application writes logs to standard output. You want to inspect the logs to find the cause of the issue. \n\nWhich approach can you take?",
    "options": [
      "Review the Stackdriver logs for each Compute Engine instance that is serving as a node in the cluster.",
      "Review the Stackdriver logs for the specific GKE container that is serving the unresponsive part of the application.",
      "Connect to the cluster using gcloud credentials and connect to a container in one of the pods to read the logs.",
      "Review the Serial Port logs for each Compute Engine instance that is serving as a node in the cluster."
    ],
    "answer": [
      "Review the Stackdriver logs for the specific GKE container that is serving the unresponsive part of the application."
    ],
    "multiple": false
  },
];

questions.sort(() => Math.random() - 0.5);

// ─── State & DOM References ───────────────────────────────────────────────────
let currentQuestion   = 0;
let score             = 0;
let showingFeedback   = false;
let quizStartTime     = new Date();
let totalTimeSeconds  = 90 * 60;
let countdownInterval = null;
let userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl  = document.getElementById("options");
const nextBtn    = document.getElementById("nextBtn");
const finishBtn  = document.getElementById("finishTestBtn");
const resultEl   = document.getElementById("result");
const timerEl    = document.getElementById("timer");

// ─── Utility Functions ───────────────────────────────────────────────────────
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function normalize(str) {
  return str
    .replace(/\\/g, "")     // remove all backslashes
    .replace(/\s+/g, " ")   // collapse whitespace/newlines into single spaces
    .trim();
}

function updateProgress() {
  const pct = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
}

// ─── Render Question ─────────────────────────────────────────────────────────
function loadQuestion() {
  showingFeedback    = false;
  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";

  const q         = questions[currentQuestion];
  const shuffled  = shuffleArray([...q.options]);
  const inputType = q.multiple ? "checkbox" : "radio";

  // break the question into lines, render any image-URL as an <img>
  const html = q.question
    .split('\n')
    .map(line => {
      const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
      if (m) {
        return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
      }
      // otherwise escape & wrap in a paragraph
      return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
    })
    .join('');
  questionEl.innerHTML = html;
  optionsEl.innerHTML    = "";

  shuffled.forEach(option => {
    const li    = document.createElement('li');
    const label = document.createElement('label');
    label.className = 'option';
  
    const input = document.createElement('input');
    input.type  = inputType;
    input.name  = 'option';
    input.value = option;
  
    const span = document.createElement('span');
    if (option.match(/\.(jpe?g|png|gif|webp)$/i)) {
      const img = document.createElement('img');
      img.src    = option;
      img.alt    = 'Option image';
      img.style.maxWidth = '100%';
      img.style.height   = 'auto';
      span.appendChild(img);
    } else {
      span.textContent = option;
    }
  
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      label.classList.add('selected');
    });
  
    label.append(input, span);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });


  // wire up the “selected” highlight
  optionsEl.querySelectorAll(`input[name="option"]`).forEach(input => {
    input.addEventListener("change", () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      input.parentElement.classList.add("selected");
    });
  });

  updateProgress();
  finishBtn.style.display = currentQuestion === questions.length - 1 ? "block" : "none";
}



// ─── Timer ────────────────────────────────────────────────────────────────────
function updateTimerDisplay() {
  const h = Math.floor(totalTimeSeconds / 3600);
  const m = Math.floor((totalTimeSeconds % 3600) / 60);
  const s = totalTimeSeconds % 60;

  let parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);

  timerEl.textContent = `Time Remaining: ${parts.join(" ")}`;
  totalTimeSeconds--;

  if (totalTimeSeconds < 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}

function startTimer() {
  updateTimerDisplay();
  countdownInterval = setInterval(updateTimerDisplay, 1000);
}

// ─── Submission & Feedback ───────────────────────────────────────────────────
nextBtn.addEventListener("click", () => {
  const currentQ       = questions[currentQuestion];
  const selectedInputs = Array.from(
    document.querySelectorAll("input[name='option']:checked")
  );

  if (!showingFeedback) {
    if (selectedInputs.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    // Normalize selected vs. correct
    const selectedNorm = selectedInputs.map(i => normalize(i.value));
    const correctNorm  = currentQ.answer.map(a => normalize(a));

    const isCorrect =
      selectedNorm.length === correctNorm.length &&
      correctNorm.every(ans => selectedNorm.includes(ans));

    const selectedRaw = selectedInputs.map(input => input.value); // preserve original formatting
      userAnswers[currentQuestion] = {
        selected: selectedRaw,
        correct: currentQ.answer,
        question: currentQ.question,
        explanation: currentQ.explanation
      };


    // Disable & highlight in one pass
    optionsEl.querySelectorAll("input[name='option']").forEach(input => {
      input.disabled = true;
      const valNorm = normalize(input.value);
      const lbl     = input.parentElement;

      if (correctNorm.includes(valNorm))       lbl.classList.add("correct");
      else if (input.checked)                  lbl.classList.add("incorrect");
    });

    // Show feedback message
    resultEl.innerHTML = isCorrect
      ? `<p style="color:green;">✅ Correct!</p>`
      : `<p style="color:red;">❌ Incorrect.</p>
         <p>Correct Answer:<br><strong>${currentQ.answer.join("<br>")}</strong></p>`;
    
    
    // ⬇️ Add this below the feedback
    if (currentQ.explanation) {
      resultEl.innerHTML += `<p class="explanation"><strong>Explanation:</strong> ${currentQ.explanation}</p>`;
    }

    
    if (isCorrect) score++;
    showingFeedback     = true;
    nextBtn.textContent = (currentQuestion < questions.length - 1)
      ? "Next Question"
      : "See Result";

  } else {
    // Move to next question or finish
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(" ");
}

function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const duration = formatDuration(Math.floor((endTime - quizStartTime) / 1000));

  const record = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  history.push(record);
  localStorage.setItem("quizScoreHistory", JSON.stringify(history));
}

function displayScoreHistory() {
  const container = document.querySelector(".container");
  const historyDiv = document.getElementById("scoreHistory");
  if (historyDiv) historyDiv.remove();

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  if (history.length === 0) return;

  const div = document.createElement("div");
  div.id = "scoreHistory";
  div.style.display = "none";
  div.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr><th>#</th><th>Score</th><th>Time Taken</th><th>Date</th></tr>
      </thead>
      <tbody>
        ${history.map((r, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${r.score} / ${r.total}</td>
            <td>${r.duration}</td>
            <td>${r.date}</td>
          </tr>`).join("")}
      </tbody>
    </table>
    
    <div style="margin-top: 10px;">
      <button id="clearHistoryBtn">Clear History</button>
      <button id="restartFromHistoryBtn" style="margin-left: 10px;">Restart Quiz</button>
    </div>
    <hr>
  `;
  container.insertBefore(div, document.getElementById("quiz"));

  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("Clear all score history?")) {
      localStorage.removeItem("quizScoreHistory");
      displayScoreHistory();
    }
  });

  document.getElementById('restartFromHistoryBtn').addEventListener('click', () => {
    if (confirm("Do you want to restart the quiz?")) {
      // Reset quiz state
      score = 0;
      currentQuestion = 0;
      showingFeedback = false;
      quizStartTime = new Date();
  
      // Reset timer
      clearInterval(countdownInterval);
      totalTimeSeconds = 90 * 60; // reset to your default duration
      updateTimerDisplay();
      startTimer();

      // Hide score history section
      const historySection = document.getElementById("scoreHistory");
      if (historySection) historySection.style.display = "none";
  
      // Shuffle and reload quiz
      questions.sort(() => Math.random() - 0.5);
      document.getElementById("quiz").style.display = "block";
      document.getElementById("finalResult").style.display = "none";
      const summary = document.getElementById("summaryPage");
      if (summary) summary.style.display = "none";
  
      loadQuestion();
    }
  });

}


// Helper functions:

function renderAnswerHTML(answers) {
  return answers.map(ans => {
    if (ans.match(/\.(jpe?g|png|gif|webp)$/i)) {
      return `<img src="${ans}" alt="Answer image" style="max-width:100%;height:auto;margin:6px 0;">`;
    }
    return `<p>${ans}</p>`;
  }).join("");
}

function renderQuestionHTML(text) {
  return text.split('\n').map(line => {
    const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
    if (m) {
      return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
    }
    return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
  }).join('');
}


// ─── Show Result & Restart ───────────────────────────────────────────────────
function showResult() {
  clearInterval(countdownInterval);
  saveScoreToHistory(score, questions.length);

  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
  `;
  finishBtn.style.display = "none";

  displayScoreHistory();
  document.getElementById("scoreHistory").style.display = "block";

  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    clearInterval(countdownInterval);
    totalTimeSeconds = 90 * 60;
    startTimer();

    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });

  const summaryDiv = document.getElementById("summaryPage");
  summaryDiv.innerHTML = "<h3>Question Summary</h3>";

  userAnswers.forEach((entry, index) => {
    const isCorrect =
      entry.selected.length === entry.correct.length &&
      entry.correct.every(ans => entry.selected.includes(ans));

    const explanationHTML = entry.explanation
      ? `<p><strong>Explanation:</strong><br>${entry.explanation}</p>`
      : "";

    const questionHTML = `
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 12px;">
        <p><strong>Q${index + 1}:</strong></p>
        ${renderQuestionHTML(entry.question)}
        <p><strong>Your Answer:</strong><br>${renderAnswerHTML(entry.selected)}</p>
        <p><strong>Correct Answer:</strong><br>${renderAnswerHTML(entry.correct)}</p>
        <p>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</p>
        ${explanationHTML}
      </div>
    `;

    summaryDiv.innerHTML += questionHTML;
  });

    
    // Hide quiz and show summary
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
    document.getElementById("scoreHistory").style.display = "block";
    summaryDiv.style.display = "block";

}


// ─── Bootstrap ───────────────────────────────────────────────────────────────

finishBtn.style.display = "none";
loadQuestion();
startTimer();
