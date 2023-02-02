import React from 'react';



function Services() {
    return (
        <div>
            <section class="page-section" id="services">
                <div class="container px-4 px-lg-5">
                    <h2 class="text-center mt-0">Services</h2>
                    <hr class="divider" id="serviceIcon" />
                    <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                            <div class="mt-5">
                                <div class="mb-2" id="serviceIcon"><i class="bi bi-circle-square fs-1"></i></div>
                                <h3 class="h4 mb-2" id="serviceHeader">Sports</h3>
                                <p class="mb-0" id="serviceP">Capturing the peak of action as it unfolds on the pitch, court, or track.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="mt-5">
                                <div class="mb-2" id="serviceIcon"><i class="bi-gem fs-1"></i></div>
                                <h3 class="h4 mb-2" id="serviceHeader">Products</h3>
                                <p class="mb-0" id="serviceP">Pictures that fit the visual identity through the use of tone, colors, props, style, and more.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="mt-5">
                                <div class="mb-2" id="serviceIcon"><i class="bi bi-people-fill fs-1"></i></div>
                                <h3 class="h4 mb-2" id="serviceHeader">Portraits</h3>
                                <p class="mb-0" id="serviceP">Capturing the personality of a person or group of people by using effective lighting, backdrops, and poses.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="mt-5">
                                <div class="mb-2" id="serviceIcon"><i class="bi bi-calendar-event fs-1"></i></div>
                                <h3 class="h4 mb-2" id="serviceHeader">Sports/ Music/ Events</h3>
                                <p class="mb-0" id="serviceP">High-quality images during a wide variety of occasions, from personal events like parties, and music festivals.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Services