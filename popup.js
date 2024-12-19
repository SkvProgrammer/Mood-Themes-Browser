document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".mood-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");

            // Change the active tab's background color
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: (color) => {
                        document.body.style.backgroundColor = color;
                    },
                    args: [color]
                });
            });
        });
    });
});
