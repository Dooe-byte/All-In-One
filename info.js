document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const fnameInput = document.getElementById("fname");
  const lnameInput = document.getElementById("lname");
  const resultDiv = document.getElementById("result");
  const langToggle = document.getElementById("langToggle");

  let currentLang = 'ht';

  const translations = {
    'en': {
      'check': 'Check',
      'first-name': 'First Name',
      'last-name': 'Last Name',
      'submit': 'Submit',
      'toggle-lang': 'Switch to Haitian Creole',
      'error-message': 'Error: Please enter your first and last name',
      'report-header': 'Dooe-Byte Report for',
    },
    'ht': {
      'check': 'Ann Tcheke',
      'first-name': 'Nom\'w',
      'last-name': 'Siyati\'w',
      'submit': 'Soumèt',
      'toggle-lang': 'Chanje pou Angle',
      'error-message': 'Erè: Tanpri antre nom\'w ak siyati\'w',
      'report-header': 'Rapò Dooe-Byte pou',
    }
  };

  function translatePage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        element.innerText = translations[lang][key];
      }
    });
    currentLang = lang;
    langToggle.innerText = translations[lang]['toggle-lang'];
  }

  submitBtn.addEventListener("click", () => {
    const firstName = fnameInput.value.trim();
    const lastName = lnameInput.value.trim();

    if (!firstName || !lastName) {
      resultDiv.textContent = translations[currentLang]['error-message'];
      resultDiv.style.color = "red";
      resultDiv.style.display = "block";
      return;
    }

    let resultText = `<h3>${translations[currentLang]['report-header']} ${firstName} ${lastName}</h3>`;
    resultText += `<hr>`;
    resultText += `<ul>`;

    const urls = [
      `https://www.411.com/name/${firstName}-${lastName}`,
      `https://www.advancedbackgroundchecks.com/search/results.aspx?type=&fn=${firstName}&mi=&ln=${lastName}&age=&city=&state=`,
      `https://www.familytreenow.com/search/genealogy/results?first=${firstName}&last=${lastName}`,
      `https://nuwber.com/search?name=${firstName}%20${lastName}`,
      `https://thatsthem.com/name/${firstName}-${lastName}`,
      `https://ufind.name/search?q=${firstName}+${lastName}`,
      `https://www.peekyou.com/${firstName}_${lastName}`,
      `https://www.addresses.com/people/${firstName}+${lastName}`,
      `https://www.spokeo.com/${firstName}-${lastName}`,
      `https://www.truepeoplesearch.com/results?name=${firstName}%20${lastName}`
      `https://www.linkedin.com/pub/dir/?first=${firstName}&last=${lastName}&search=Search`,
    ];

    urls.forEach(url => {
      resultText += `<li><a href="${url}" target="_blank">${url}</a></li>`;
    });
    resultText += `</ul>`;

    resultDiv.innerHTML = resultText;
    resultDiv.style.display = "block";
    resultDiv.style.color = "black";
  });

  langToggle.addEventListener('click', () => {
    if (currentLang === 'ht') {
      translatePage('en');
    } else {
      translatePage('ht');
    }
  });
  translatePage(currentLang);
});
