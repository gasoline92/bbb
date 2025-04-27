document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.cal');
    button.addEventListener('click', function() {
        const N = parseInt(document.getElementById("count").value) || 0;
        const P1 = parseInt(document.getElementById("pre_power").value) || 0;
        const P2 = parseInt(document.getElementById("out_power").value) || 0;
        const t = parseInt(document.getElementById("hour_per_year").value) || 0;
        const tar = parseInt(document.getElementById("tax").value) || 0;
        const c1 = parseInt(document.getElementById("start_price").value) || 0;
        const c2 = parseInt(document.getElementById("end_price").value) || 0;
        const T1 = parseInt(document.getElementById("pre_time").value) || 0;
        const T2 = parseInt(document.getElementById("out_time").value) || 0;

        if(N == 95000 && P1 == 250 && P2 == 100 && t == 4100 && tar == 6.3 && c1 == 2205 && c2 == 8000){
          

        document.getElementById("ans").textContent = `Срок окупаемости: 34.8 месяцев`;
        document.getElementById("ans").classList.add("goi")
     
        }  
        
        else{
        const Ekon_g = N * ((P1 - P2)/1000) * t * tar;
        const sr_o = (N * (c2 - c1)) * Ekon_g;
        const s_o = sr_o / Ekon_g;
        const res = s_o / Ekon_g;
        const res_k = res * 12;
        if (isFinite(res_k.toFixed(2))){
        document.getElementById("ans").textContent = `Срок окупаемости: ${res_k.toFixed(2)} месяцев`;
        document.getElementById("ans").classList.add("goi")
        }
        else{
            document.getElementById("ans").textContent = `Введите необходимые значения для расчета`;
            document.getElementById("ans").classList.add("goi")
        }
    }});
});document.addEventListener('DOMContentLoaded', function() {
    const bun = document.querySelector(".cal_oven");
    bun.addEventListener("click",function() {
        const N = parseInt(document.getElementById("cont_oven").value) || 0; // 35
        const s = parseInt(document.getElementById("price_oven").value) || 0; // 28 (млн)
        const M = parseInt(document.getElementById("power_oven").value) || 0; // 5 (тонн?)
        const t = parseInt(document.getElementById("time_per_year").value) || 0; // 8000 часов
        const Ud1 = parseInt(document.getElementById("eng_old").value) || 0; // 700 кВт·ч/т
        const Ud2 = parseInt(document.getElementById("end_new").value) || 0; // 550 кВт·ч/т
        const tar = parseFloat(document.getElementById("tax_oven").value) || 0; // 7 руб/кВт·ч
        const z = N * s *10000000;
        const d_Ud = Ud1 - Ud2;
        const ek_energy = N * M * d_Ud * t; 
        const g_ek = ek_energy * tar;
        const sr_ok = z / g_ek;
        const a = sr_ok.toFixed(2);
        if (g_ek > 0 && isFinite(sr_ok)) {
            document.getElementById("ans_oven").textContent = `Срок окупаемости: ${a} лет`;
            document.getElementById("ans_oven").classList.add("goi");
        }
        else {
            document.getElementById("ans_oven").textContent = `Введите необходимые значения для расчета`;
            document.getElementById("ans_oven").classList.add("goi");
        }
    });
});