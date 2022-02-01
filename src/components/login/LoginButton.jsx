
export const LoginButton = ({ loading }) => {
    return (
        <>
            <button
                type='submit'
                className={ loading ? `btn btn-primary w-100 disabled` : `btn btn-primary w-100`}
            >
                {
                    loading ?
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    :
                    "Sign In"
                }
            </button>
        </>
    )
}
