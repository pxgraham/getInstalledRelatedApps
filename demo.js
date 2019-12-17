const status = document.getElementById('status');
const ul = document.getElementById('installedApps');

window.addEventListener('load', () => {
  // Check to see if the API is supported.
  if ('getInstalledRelatedApps' in navigator) {
    const divNotSupported = document.getElementById('notSupported');
    divNotSupported.classList.toggle('hidden', true);
    checkForRelatedApps();
  }
});

function checkForRelatedApps() {
  navigator.getInstalledRelatedApps().then((relatedApps) => {
    status.textContent = `resolved (${relatedApps.length})`;
    relatedApps.forEach((app) => {
      const lines = [];
      lines.push(`<b>id:</b> <code>${app.id}</code>`);
      lines.push(`<b>platform:</b> ${app.platform}`);
      lines.push(`<b>url:</b> <a href="${app.url}">${app.url}</a>`);
      const li = document.createElement('li');
      li.innerHTML = lines.join('<br>');
      ul.appendChild(li);
    });
  });
}
  

