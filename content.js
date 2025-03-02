document.addEventListener("keydown", function(event) {
    // If "/" is pressed and the user is not in an input field, focus on the search bar
    if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
        event.preventDefault(); // Prevent default "/" behavior

        // Try to directly access the search field
        let searchBox = document.querySelector("input#search");

        if (searchBox) {
            searchBox.focus();
        } else {
            // If the search field is not found, try clicking the search button
            let searchButton = document.querySelector("#center > yt-searchbox > div.ytSearchboxComponentInputBox.ytSearchboxComponentInputBoxDark > form > input");
            if (searchButton) {
                searchButton.click();

                // Wait briefly, then focus the search field
                setTimeout(() => {
                    let searchBoxAfterClick = document.querySelector("input#search");
                    if (searchBoxAfterClick) {
                        searchBoxAfterClick.focus();
                    }
                }, 200);
            }
        }
    }

    // If "Escape" is pressed and the search field is active, blur it (exit focus)
    if (event.key === "Escape" && document.activeElement.id === "search") {
        event.preventDefault(); // Prevent default behavior
        document.activeElement.blur(); // Remove focus from the search bar
    }
});
