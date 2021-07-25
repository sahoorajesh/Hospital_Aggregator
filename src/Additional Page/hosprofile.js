import React from "react";

import "./hosprofile.css"



function hosprofile() {




    return (
        <div>
            <body>
                <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
                    <div class="wrapper wrapper--w790">
                        <div class="card card-5">
                            <div class="card-heading">
                                <h2 class="title">Hospital Registration Form</h2>
                            </div>
                            <div class="card-body">
                                <form method="POST">
                                    <div class="form-row">
                                        <div class="name">Name</div>
                                        <div class="value">
                                            <div class="input-group">
                                                <input class="input--style-5" type="text" name="name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="name">District</div>
                                        <div class="value">
                                            <div class="input-group">
                                                <input class="input--style-5" type="text" name="district" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="name">Email</div>
                                        <div class="value">
                                            <div class="input-group">
                                                <input class="input--style-5" type="email" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row m-b-55">
                                        <div class="name">Phone</div>
                                        <div class="value">
                                            <div class="row row-refine">
                                                <div class="col-3">
                                                    <div class="input-group-desc">
                                                        <input class="input--style-5" type="text" name="area_code" />
                                                        <label class="label--desc">Area Code</label>
                                                    </div>
                                                </div>
                                                <div class="col-9">
                                                    <div class="input-group-desc">
                                                        <input class="input--style-5" type="text" name="phone" />
                                                        <label class="label--desc">Phone Number</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ">
                                        <div class="name">Address</div>
                                        <div class="value">
                                            <div class="input-group">
                                                <input class="input--style-5" type="text" name="address" />
                                            </div>
                                        </div>

                                    </div>

                                    <div class="form-row m-b-55">
                                        <div class="name">Year of Starting</div>
                                        <div class="value">
                                            <div class="row row-refine">
                                                <div class="col-3">
                                                    <div class="input-group-desc">
                                                        <input class="input--style-5" type="text" name="year" />


                                                    </div>
                                                </div>

                                                <div class="name tk ">Ownership</div>
                                                <div class="col-2">

                                                    <div class="input-group-desc">

                                                        <input class="input--style-5" type="text" name="owner" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row ">
                                        <div class="name">About Hospital</div>
                                        <div class="value">
                                            <div class="input-group">
                                                <input class="input--style-5" type="text" name="about" />
                                            </div>
                                        </div>

                                    </div>


                                    <div class="form-row m-b-55">
                                        <div class="name">Username</div>
                                        <div class="value">
                                            <div class="row row-refine">
                                                <div class="col-2">
                                                    <div class="input-group-desc">
                                                        <input class="input--style-5" type="text" name="username" />


                                                    </div>
                                                </div>

                                                <div class="name tk ">Password</div>
                                                <div class="col-3">

                                                    <div class="input-group-desc">

                                                        <input class="input--style-5" type="text" name="password" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row ">
                                        <div class="name">Speciality</div>
                                        <div class="value">
                                            <div class="input-group">
                                                <input class="input--style-5" type="text" name="speciality" />
                                            </div>
                                        </div>

                                    </div>





                                    <button class="btn btn--radius-2 btn--red" type="submit">Edit</button>
                                    <button class="btn btn--radius-2 btn--blue fl" type="submit">Save</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </body>


        </div>


    );
}


export default hosprofile;


