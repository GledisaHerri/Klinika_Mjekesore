$(document).ready(function () {
    let sherbimet = [
        { 
            emri: "Vizita Mjekësore", 
            pershkrimi: "Kontrolle të përgjithshme dhe specialistike për diagnozën tuaj.", 
            shpjegim: "Vizitat mjekësore janë thelbësore për të monitoruar shëndetin dhe për të parandaluar sëmundjet.", 
            link: "rezervimi.html",
            ikone: "fa-user-md"
        },
        { 
            emri: "Grafi (Radiografi)", 
            pershkrimi: "Ekzaminime për kockat dhe organet e brendshme.", 
            shpjegim: "Radiografia është një teknikë diagnostike që ndihmon në identifikimin e frakturave dhe problemeve skeletore.", 
            link: "rezervimi.html",
            ikone: "fa-x-ray"
        },
        { 
            emri: "Mamografi", 
            pershkrimi: "Kontrolle për diagnostikimin e hershëm të kancerit të gjirit.", 
            shpjegim: "Mamografia është një test jetik për gratë mbi 40 vjeç për të zbuluar ndryshime në inde gjiri.", 
            link: "rezervimi.html",
            ikone: "fa-ribbon"
        },
        { 
            emri: "Analiza Laboratorike", 
            pershkrimi: "Testime për të vlerësuar gjendjen shëndetësore.", 
            shpjegim: "Analizat e gjakut dhe të urinës ndihmojnë në identifikimin e anomalive dhe monitorimin e shëndetit.", 
            link: "rezervimi.html",
            ikone: "fa-vials"
        },
        { 
            emri: "Ekografi dhe Kontroll Kardiologjik", 
            pershkrimi: "Ekzaminime të avancuara për zemrën dhe organet e brendshme.", 
            shpjegim: "Ekografia përdoret për të diagnostikuar sëmundjet e organeve të brendshme dhe për të monitoruar funksionin e zemrës.", 
            link: "rezervimi.html",
            ikone: "fa-heartbeat"
        }
    ];

    let servicesContainer = $("#services");

    $.each(sherbimet, function (index, sherbimi) {
        let serviceHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="service-card" data-name="${sherbimi.emri}" 
                     data-shortdesc="${sherbimi.shpjegim}" 
                     data-info="${sherbimi.pershkrimi}" 
                     data-link="${sherbimi.link}">
                    <i class="service-icon fas ${sherbimi.ikone}"></i>
                    <h4>${sherbimi.emri}</h4>
                    <p>${sherbimi.pershkrimi}</p>
                    <a href="#" class="btn-custom open-modal">Më shumë</a>
                </div>
            </div>
        `;
        servicesContainer.append(serviceHTML);
    });

    $(".open-modal").click(function () {
        let card = $(this).closest(".service-card");
        $("#serviceTitle").text(card.data("name"));
        $("#serviceShortDesc").text(card.data("shortdesc"));
        $("#serviceDescription").text(card.data("info"));
        $("#reserveBtn").attr("href", card.data("link"));
        $("#serviceModal").modal("show");
    });
});
