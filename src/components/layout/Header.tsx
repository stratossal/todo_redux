
export const Header = () => {
    return (
        <nav
            className="navbar navbar-dark"
            style={{ background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                    <i className="bi bi-card-checklist text-white fs-3 me-2"></i>
                    <span className="navbar-brand fw-bold mb-0 h1">
                        Todo App
                    </span>
                </div>
            </div>
        </nav>
    );
};
