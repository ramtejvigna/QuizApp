export default function HighScore() {
    return (
        <>
            <div className="high-score-table">
                <table border={1}>
                    <tbody>
                        <tr cellSpacing="10">
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}