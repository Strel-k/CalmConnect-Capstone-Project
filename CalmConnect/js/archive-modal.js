 function showArchiveModal(category, data) {
    const modal = document.getElementById("archive-modal");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");

    let content = "";

    if (category === 'appointments') {
      title.textContent = "Appointment Details";
      content = `
        <p><strong>Student:</strong> ${data.student}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Counselor:</strong> ${data.counselor}</p>
        <p><strong>Reason:</strong> ${data.reason}</p>
      `;
    } else if (category === 'dass21') {
      title.textContent = "DASS21 Test Results";
      content = `
        <p><strong>User:</strong> ${data.user}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Anxiety:</strong> ${data.anxiety}</p>
        <p><strong>Depression:</strong> ${data.depression}</p>
        <p><strong>Stress:</strong> ${data.stress}</p>
      `;
    } else if (category === 'employees') {
      title.textContent = "Archived Employee Info";
      content = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Unit:</strong> ${data.unit}</p>
        <p><strong>Rank:</strong> ${data.rank}</p>
        <p><strong>Status:</strong> Archived</p>
      `;
    }

    body.innerHTML = content;
    modal.style.display = "block";
  }

  function closeArchiveModal() {
    document.getElementById("archive-modal").style.display = "none";
  }

  // Optional: close modal by clicking outside
  window.onclick = function(e) {
    const modal = document.getElementById("archive-modal");
    if (e.target === modal) closeArchiveModal();
  };