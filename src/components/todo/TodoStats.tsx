type TodoStatsProps = {
    total: number
    completed: number
    active: number
}

export const TodoStats = ({ total, completed, active }: TodoStatsProps) => {
    return (
        <div className="mt-4">
            <div className="row g-3 text-center">
                <div className="col-4">
                    <div className="card border-0 h-100">
                        <div className="card-body p-3">
                            <div className="text-muted small mb-1">
                                Total
                            </div>
                            <div className="fs-4 fw-bold text-primary">
                                {total}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card border-0 h-100">
                        <div className="card-body p-3">
                            <div className="text-muted small mb-1">
                                Completed
                            </div>
                            <div className="fs-4 fw-bold text-success">
                                {completed}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card border-0 h-100">
                        <div className="card-body p-3">
                            <div className="text-muted small mb-1">
                                Active
                            </div>
                            <div className="fs-4 fw-bold text-warning">
                                {active}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}