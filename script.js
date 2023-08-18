const grid = document.getElementsByClassName('grid');

for (let i = 0; i < grid.length; i++) {
    grid[i].innerHTML += 
    `
        <div class="left-div"></div>
        <div class="right-div">
            <h3>Lorem</h3>
            <p class="grid-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
    `
}