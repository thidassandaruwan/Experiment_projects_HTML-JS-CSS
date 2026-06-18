const lightSwitch = document.getElementById("light_switch");
const darkSwitch = document.getElementById("dark_switch");

lightSwitch.addEventListener("click", () => setTheme("light"));
darkSwitch.addEventListener("click", () => setTheme("dark"));

function setProp(prop, value){
    document.documentElement.style.setProperty(prop, value);
}

function setTheme(theme){
    if ((theme == "dark") || !theme){
        setProp("--background", "var(--dark-main)");
        setProp("--foreground", "var(--light-main)");
    }
    else if(theme == "light"){
        setProp("--background", "var(--light-main)");
        setProp("--foreground", "var(--dark-main)");
    }
}