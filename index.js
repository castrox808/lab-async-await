// Write your code here!
// Function to loop through and display the posts inside the DOM 
function displayPosts(posts) { 
    const ul = document.getElementById("post-list"); 
    
    // Clear list to ensure clean re-renders 
    ul.innerHTML = ''; 
    
    posts.forEach(post => { 
        // Create required elements 
        const li = document.createElement('li'); 
        const h1 = document.createElement('h1'); 
        const p = document.createElement('p'); 
        
        // Map data properties to element text contents 
        h1.textContent = post.title; 
        p.textContent = post.body; 
        
        // Construct HTML hierarchy 
        li.appendChild(h1); 
        li.appendChild(p); 
        ul.appendChild(li); 
    }); 
} 

// Modern Async/Await fetch utility incorporating precise error handling 
async function fetchRandomPosts() { 
    // Fix: Updated to the correct full endpoint URL
    const url = 'https://typicode.com'; 
    
    try { 
        console.log('Fetching random posts from API...'); 
        const response = await fetch(url); 
        
        if (!response.ok) { 
            throw new Error(`HTTP error! Status: ${response.status}`); 
        } 
        
        const posts = await response.json(); 
        
        // Randomize the post array order for the random feed tab behavior 
        const shuffledPosts = posts.sort(() => 0.5 - Math.random()); 
        
        // Send processed data array to the display pipeline 
        displayPosts(shuffledPosts); 
        console.log('Posts successfully rendered to the UI.'); 
    } catch (error) { 
        // Critical for monitoring lab environments using Browser Developer Tools Console 
        console.error('Failed to load posts:', error.message); 
        const ul = document.getElementById('post-list'); 
        ul.innerHTML = `<li class="error">Unable to load feed. Please try again later.</li>`; 
    } 
} 

// Initial execution call automatically triggered when the script runs 
fetchRandomPosts(); 

// === COMMONJS EXPORTS REQUIRED BY MOCHA LAB TESTS === 
if (typeof module !== 'undefined' && module.exports) { 
    module.exports = { displayPosts, fetchRandomPosts }; 
}
