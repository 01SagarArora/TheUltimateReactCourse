const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
};

const starContainerStype = {
    display: "flex",
    gap: "4px",
};

const textStyle = {
    display: "flex",
    gap : "4px",
}

export default function StarRating({maxRating = 5}) {
    return (
        <div style={containerStyle}>
            <div style={starContainerStype}>
                {
                    Array.from({ length: maxRating }, (_, i) => (<span>S{i + 1}</span>))
                } 
            </div>
            <p style={textStyle}>10</p>
        </div>
    )
}