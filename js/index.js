
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarContent = document.getElementById('sidebar-content');
    
    
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        sidebarContent.classList.add('collapsed');
    } else {
        sidebarContent.classList.remove('collapsed');
    }
}

function showParagraph(paraNumber) {
    document.getElementById('para1').classList.add('hidden');
    document.getElementById('para2').classList.add('hidden');
    document.getElementById('list').classList.add('hidden');
    
    if (paraNumber === 1) {
        document.getElementById('para1').classList.remove('hidden');
        document.getElementById('list').classList.remove('hidden');
    } else if (paraNumber === 2) {
        document.getElementById('para2').classList.remove('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    showParagraph(1)});
    