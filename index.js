addClass = () => {
    let summary = document.getElementById('details');
    let temClass = summary.classList.contains("summary_auto");
    if (temClass) {
        summary.classList.remove("summary_auto");        
    } else {
        summary.classList.add("summary_auto");
    }
}