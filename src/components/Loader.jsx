export default function Loader() {
    return (
        <div className="d-flex justify-center items-center animate-fade-right animate-once animate-duration-5000 animate-delay-200 animate-ease-linear" style={{ height: "100vh" }}>
            <div className="spinner-border text-primary" role="status">
                <img   src="../assets/logo.png" />
            </div>
        </div>
    )
}