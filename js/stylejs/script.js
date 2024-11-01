document.addEventListener("DOMContentLoaded"), () => {
    const lenguageSelector = document.getElementById("lenguageDropdown");
    let currentLenguage = "en" //en= english es= español
}

//Cargar las traducciones desde el archivo JSON
fetch("js.translations.json")
    .then(Response => Response.json())
    .then(translations => {
        console.log("verificacion de quelas traducciones se cambiaron", translations);
        //cambiar de idioma al seleccionar una opcion
        document.querySelectorAll("[data-lang]").forEach(item =>{
            item.addEventListener("click", (event)=> {
                const selectedLenguage = event.target.closet("[data-lang]").dataset.lang;
                console.log ("lenguaje seleccionado es:", selectedLenguage);
                if (selectedLenguage && selectedLenguage !== currentLenguage){
                    currentLenguage = selectedLenguage;
                    applyTranslations(translations[currentLenguage]);

                    // Cambiar el texto y la bandera del botón
                    languageSelector.querySelector("img").src = selectedLanguage === "es" 
                    ? "https://flagcdn.com/w40/es.png"
                    : "https://flagcdn.com/w40/us.png";
                languageSelector.querySelector("span").textContent = translations[currentLanguage].language;
                }
            });
        });

        //aplicar el idioma oficial
        applyTranslations(translations[currentLanguage]);
    })
    .catch(error => console.error("Error cargando las traducciones", error)); // Capturar el error archivos JSON
    // Función para actualizar el contenido de la página
    function applyTranslations(languageTexts) {
        console.log("Applying translations:", languageTexts);  // Verificar valores de traducciones
        document.querySelector("[data-translate='navbar_services']").textContent = languageTexts.navbar_services;
        document.querySelector("[data-translate='navbar_doubts']").textContent = languageTexts.navbar_doubts;
        document.querySelector("[data-translate='navbar_collections']").textContent = languageTexts.navbar_collections;
    }