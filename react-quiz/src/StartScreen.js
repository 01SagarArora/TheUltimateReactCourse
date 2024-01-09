function StartScreen({ numQuestions }) {
    return (
        <div className="start">
            <h2> Welcome to The React Quiz!</h2>    
            <p> { numQuestions} question to test your React mystery</p>    
            <button className="btn btn-ui"> Let's Start </button>    
        </div>
    )
}

export default StartScreen;