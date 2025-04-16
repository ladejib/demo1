document.addEventListener('DOMContentLoaded', () => {
    const testBtn = document.getElementById('test-btn');
    const apiResponse = document.getElementById('api-response');
    
    if (testBtn) {
        testBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('/api/button-click', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                
                apiResponse.classList.remove('d-none');
                apiResponse.textContent = data.message;
            } catch (error) {
                apiResponse.classList.remove('d-none');
                apiResponse.textContent = 'Error calling API';
                apiResponse.classList.add('alert-danger');
            }
        });
    }
});