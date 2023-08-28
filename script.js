// scripts.js
$(document).ready(function () {
    $('#send-button').click(function () {
        var userMessage = $('#user-input').val();
        if (userMessage.trim() !== '') {
            $('#message-box').append('<div class="message user-message">' + userMessage + '</div>');
            $('#user-input').val('');

            // Simulate chatbot response (replace with your logic)
            var botResponse = 'Thank you for your message! How can I assist you today?';
            setTimeout(function () {
                $('#message-box').append('<div class="message bot-message">' + botResponse + '</div>');
                $('#message-box').scrollTop($('#message-box')[0].scrollHeight);
            }, 1000);
        }
    });
});
