const lightButton = document.getElementById("light_mode");
const darkButton = document.getElementById("dark_mode");


lightButton.addEventListener("click", () => colorTheme("light"));
darkButton.addEventListener("click", () => colorTheme("dark"));

function setProp(prop, value){
    document.documentElement.style.setProperty(prop, value);
}

function colorTheme(theme){
    if (theme == "light" || !theme)
    {
        setProp("--background", "var(--light)");
        setProp("--text", "var(--dark)");
    }
    else if(theme == "dark")
    {
        setProp("--background", "var(--dark)");
        setProp("--text", "var(--light)");
    }
}