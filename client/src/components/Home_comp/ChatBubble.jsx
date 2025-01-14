function ChatBubble() {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className="chat-bubble bg-gray-200 text-black font-sans">When you play the Game of Thrones, either you win, or you die.</div>
        </div>
    )
}

export default ChatBubble;