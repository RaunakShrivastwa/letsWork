import React from 'react'

const Career = () => {
    return (
        <>
            <div className="container-fluid my-5 pt-4" style={{ background: '#E6EBEF' }}>
                <div className="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card bg-transparent h-100 border border-0 justify-content-center">
                                <h2 className='f38 mb-3'>
                                    <span className='fw-bold' style={{ color: '#F85508' }}>CAREER </span>@<br />
                                    Next Big Technology
                                </h2>
                                <p className='f14'>Start your career with a growing company in a learning environment and work with a team of skilled and experienced professionals.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card bg-transparent h-100 border border-0 p-5">
                                <img src="https://nextbigtechnology.com/wp-content/uploads/2021/08/career-banner-img.png.webp" alt="CareerImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career
