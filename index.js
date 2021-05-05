let base = JSON.parse(`{
    "3100":{"700":"45000","800":"47000","900":"49000","1000":"51000","1100":"53000","1200":"56000","1300":"58000","1400":"60000","1500":"62000","1600":"64000","1700":"66000","1800":"68000","1900":"74000","2000":"75000","2100":"77000","2200":"79000","2300":"81000","2400":"83000","2500":"85000","2600":"90000","2700":"92000","2800":"94000","2900":"96000","3000":"99000","3100":"101000","3200":"103000","3300":"105000","3400":"107000","3500":"109000","3600":"111000","3700":"113000","3800":"115000","3900":"117000","4000":"120000","4100":"122000","4200":"124000","4300":"126000","4400":"128000","4500":"131000","4600":"134000","4700":"137000","4800":"141000","4900":"144000","5000":"147000","5100":"150000","5200":"153000","5300":"156000","5400":"159000","5500":"163000","5600":"169000","5700":"173000","5800":"177000","5900":"182000","6000":"186000"},
    "3050":{"700":"44000","800":"47000","900":"49000","1000":"51000","1100":"53000","1200":"55000","1300":"57000","1400":"59000","1500":"61000","1600":"63000","1700":"65000","1800":"68000","1900":"74000","2000":"75000","2100":"76000","2200":"78000","2300":"79000","2400":"82000","2500":"84000","2600":"89000","2700":"91000","2800":"93000","2900":"95000","3000":"98000","3100":"99000","3200":"101000","3300":"103000","3400":"105000","3500":"107000","3600":"109000","3700":"111000","3800":"113000","3900":"115000","4000":"117000","4100":"120000","4200":"122000","4300":"124000","4400":"126000","4500":"129000","4600":"132000","4700":"135000","4800":"138000","4900":"142000","5000":"145000","5100":"148000","5200":"151000","5300":"154000","5400":"157000","5500":"161000","5600":"167000","5700":"171000","5800":"175000","5900":"179000","6000":"184000"},
    "3000":{"700":"44000","800":"46000","900":"48000","1000":"50000","1100":"52000","1200":"54000","1300":"57000","1400":"59000","1500":"61000","1600":"63000","1700":"65000","1800":"67000","1900":"73000","2000":"74000","2100":"75000","2200":"77000","2300":"78000","2400":"81000","2500":"83000","2600":"85000","2700":"90000","2800":"92000","2900":"94000","3000":"96000","3100":"96000","3200":"99000","3300":"101000","3400":"103000","3500":"105000","3600":"107000","3700":"109000","3800":"111000","3900":"113000","4000":"115000","4100":"117000","4200":"120000","4300":"122000","4400":"124000","4500":"127000","4600":"130000","4700":"133000","4800":"136000","4900":"140000","5000":"143000","5100":"146000","5200":"149000","5300":"152000","5400":"155000","5500":"158000","5600":"162000","5700":"168000","5800":"173000","5900":"177000","6000":"182000"},
    "2950":{"700":"43000","800":"46000","900":"48000","1000":"50000","1100":"52000","1200":"54000","1300":"56000","1400":"58000","1500":"60000","1600":"62000","1700":"64000","1800":"67000","1900":"73000","2000":"74000","2100":"75000","2200":"76000","2300":"77000","2400":"80000","2500":"82000","2600":"84000","2700":"89000","2800":"91000","2900":"93000","3000":"94000","3100":"95000","3200":"96000","3300":"99000","3400":"101000","3500":"103000","3600":"105000","3700":"107000","3800":"109000","3900":"111000","4000":"113000","4100":"115000","4200":"117000","4300":"120000","4400":"122000","4500":"125000","4600":"128000","4700":"131000","4800":"134000","4900":"137000","5000":"141000","5100":"144000","5200":"147000","5300":"150000","5400":"153000","5500":"156000","5600":"159000","5700":"166000","5800":"171000","5900":"175000","6000":"179000"},
    "2900":{"700":"43000","800":"45000","900":"47000","1000":"49000","1100":"51000","1200":"53000","1300":"56000","1400":"58000","1500":"60000","1600":"62000","1700":"64000","1800":"66000","1900":"72000","2000":"73000","2100":"74000","2200":"75000","2300":"77000","2400":"79000","2500":"81000","2600":"83000","2700":"87000","2800":"90000","2900":"92000","3000":"93000","3100":"94000","3200":"95000","3300":"96000","3400":"99000","3500":"101000","3600":"103000","3700":"105000","3800":"107000","3900":"109000","4000":"111000","4100":"113000","4200":"115000","4300":"117000","4400":"120000","4500":"123000","4600":"126000","4700":"129000","4800":"132000","4900":"135000","5000":"138000","5100":"142000","5200":"145000","5300":"148000","5400":"151000","5500":"154000","5600":"157000","5700":"164000","5800":"169000","5900":"173000","6000":"177000"},
    "2850":{"700":"42000","800":"44000","900":"47000","1000":"49000","1100":"51000","1200":"53000","1300":"55000","1400":"57000","1500":"59000","1600":"61000","1700":"63000","1800":"65000","1900":"72000","2000":"73000","2100":"74000","2200":"75000","2300":"76000","2400":"78000","2500":"80000","2600":"82000","2700":"86000","2800":"89000","2900":"91000","3000":"92000","3100":"93000","3200":"94000","3300":"95000","3400":"96000","3500":"99000","3600":"101000","3700":"103000","3800":"105000","3900":"107000","4000":"109000","4100":"111000","4200":"113000","4300":"115000","4400":"117000","4500":"121000","4600":"124000","4700":"127000","4800":"130000","4900":"133000","5000":"136000","5100":"140000","5200":"143000","5300":"146000","5400":"149000","5500":"152000","5600":"155000","5700":"162000","5800":"167000","5900":"171000","6000":"175000"},
    "2800":{"700":"42000","800":"44000","900":"46000","1000":"48000","1100":"50000","1200":"52000","1300":"54000","1400":"57000","1500":"59000","1600":"61000","1700":"63000","1800":"65000","1900":"71000","2000":"72000","2100":"73000","2200":"74000","2300":"75000","2400":"77000","2500":"79000","2600":"81000","2700":"81000","2800":"87000","2900":"90000","3000":"91000","3100":"92000","3200":"93000","3300":"94000","3400":"95000","3500":"96000","3600":"99000","3700":"101000","3800":"103000","3900":"105000","4000":"107000","4100":"109000","4200":"111000","4300":"113000","4400":"115000","4500":"119000","4600":"122000","4700":"125000","4800":"128000","4900":"131000","5000":"134000","5100":"137000","5200":"141000","5300":"144000","5400":"147000","5500":"150000","5600":"153000","5700":"156000","5800":"165000","5900":"169000","6000":"173000"},
    "2750":{"700":"41000","800":"43000","900":"46000","1000":"48000","1100":"50000","1200":"52000","1300":"54000","1400":"56000","1500":"58000","1600":"60000","1700":"62000","1800":"64000","1900":"70000","2000":"71000","2100":"72000","2200":"73000","2300":"74000","2400":"75000","2500":"78000","2600":"80000","2700":"80000","2800":"86000","2900":"88000","3000":"89000","3100":"90000","3200":"91000","3300":"92000","3400":"93000","3500":"94000","3600":"96000","3700":"99000","3800":"101000","3900":"103000","4000":"105000","4100":"107000","4200":"109000","4300":"111000","4400":"113000","4500":"116000","4600":"120000","4700":"123000","4800":"126000","4900":"129000","5000":"132000","5100":"135000","5200":"138000","5300":"142000","5400":"145000","5500":"148000","5600":"151000","5700":"154000","5800":"163000","5900":"167000","6000":"171000"},
    "2700":{"700":"41000","800":"43000","900":"45000","1000":"47000","1100":"49000","1200":"51000","1300":"53000","1400":"56000","1500":"58000","1600":"60000","1700":"62000","1800":"64000","1900":"69000","2000":"70000","2100":"71000","2200":"72000","2300":"73000","2400":"74000","2500":"77000","2600":"79000","2700":"79000","2800":"85000","2900":"86000","3000":"87000","3100":"89000","3200":"90000","3300":"91000","3400":"92000","3500":"93000","3600":"94000","3700":"96000","3800":"99000","3900":"101000","4000":"103000","4100":"105000","4200":"107000","4300":"109000","4400":"111000","4500":"114000","4600":"117000","4700":"121000","4800":"124000","4900":"127000","5000":"130000","5100":"133000","5200":"136000","5300":"140000","5400":"143000","5500":"146000","5600":"149000","5700":"152000","5800":"161000","5900":"165000","6000":"169000"},
    "2650":{"700":"40000","800":"42000","900":"44000","1000":"47000","1100":"49000","1200":"51000","1300":"53000","1400":"55000","1500":"57000","1600":"59000","1700":"61000","1800":"63000","1900":"68000","2000":"69000","2100":"70000","2200":"71000","2300":"72000","2400":"73000","2500":"75000","2600":"78000","2700":"78000","2800":"84000","2900":"85000","3000":"86000","3100":"88000","3200":"89000","3300":"90000","3400":"91000","3500":"92000","3600":"93000","3700":"94000","3800":"96000","3900":"99000","4000":"101000","4100":"103000","4200":"105000","4300":"107000","4400":"109000","4500":"112000","4600":"115000","4700":"119000","4800":"122000","4900":"125000","5000":"128000","5100":"131000","5200":"134000","5300":"137000","5400":"141000","5500":"144000","5600":"147000","5700":"150000","5800":"158000","5900":"163000","6000":"167000"},
    "2600":{"700":"40000","800":"42000","900":"44000","1000":"46000","1100":"48000","1200":"50000","1300":"52000","1400":"54000","1500":"57000","1600":"59000","1700":"61000","1800":"63000","1900":"67000","2000":"68000","2100":"69000","2200":"70000","2300":"71000","2400":"72000","2500":"74000","2600":"77000","2700":"77000","2800":"83000","2900":"84000","3000":"85000","3100":"87000","3200":"88000","3300":"89000","3400":"90000","3500":"91000","3600":"92000","3700":"93000","3800":"94000","3900":"96000","4000":"99000","4100":"101000","4200":"103000","4300":"105000","4400":"107000","4500":"110000","4600":"113000","4700":"116000","4800":"120000","4900":"123000","5000":"126000","5100":"129000","5200":"132000","5300":"135000","5400":"138000","5500":"142000","5600":"145000","5700":"148000","5800":"156000","5900":"161000","6000":"165000"},
    "2550":{"700":"39000","800":"41000","900":"43000","1000":"46000","1100":"48000","1200":"50000","1300":"52000","1400":"54000","1500":"56000","1600":"58000","1700":"60000","1800":"62000","1900":"66000","2000":"68000","2100":"69000","2200":"70000","2300":"71000","2400":"72000","2500":"74000","2600":"75000","2700":"76000","2800":"82000","2900":"83000","3000":"84000","3100":"86000","3200":"87000","3300":"88000","3400":"89000","3500":"90000","3600":"91000","3700":"92000","3800":"93000","3900":"94000","4000":"96000","4100":"99000","4200":"101000","4300":"103000","4400":"105000","4500":"108000","4600":"111000","4700":"114000","4800":"117000","4900":"121000","5000":"124000","5100":"127000","5200":"130000","5300":"133000","5400":"136000","5500":"140000","5600":"143000","5700":"146000","5800":"154000","5900":"158000","6000":"163000"},
    "2500":{"700":"39000","800":"41000","900":"43000","1000":"45000","1100":"47000","1200":"49000","1300":"51000","1400":"53000","1500":"56000","1600":"58000","1700":"60000","1800":"62000","1900":"65000","2000":"67000","2100":"68000","2200":"69000","2300":"70000","2400":"71000","2500":"73000","2600":"74000","2700":"75000","2800":"78000","2900":"82000","3000":"83000","3100":"85000","3200":"86000","3300":"87000","3400":"88000","3500":"89000","3600":"90000","3700":"91000","3800":"92000","3900":"93000","4000":"94000","4100":"96000","4200":"99000","4300":"101000","4400":"103000","4500":"106000","4600":"109000","4700":"112000","4800":"115000","4900":"119000","5000":"122000","5100":"125000","5200":"128000","5300":"131000","5400":"134000","5500":"137000","5600":"141000","5700":"144000","5800":"147000","5900":"156000","6000":"161000"},
    "2450":{"700":"38000","800":"40000","900":"42000","1000":"44000","1100":"47000","1200":"49000","1300":"51000","1400":"53000","1500":"55000","1600":"57000","1700":"59000","1800":"61000","1900":"64000","2000":"66000","2100":"68000","2200":"69000","2300":"70000","2400":"71000","2500":"72000","2600":"74000","2700":"75000","2800":"77000","2900":"81000","3000":"82000","3100":"84000","3200":"85000","3300":"86000","3400":"87000","3500":"88000","3600":"89000","3700":"90000","3800":"91000","3900":"92000","4000":"93000","4100":"95000","4200":"98000","4300":"100000","4400":"102000","4500":"104000","4600":"107000","4700":"110000","4800":"113000","4900":"116000","5000":"120000","5100":"123000","5200":"126000","5300":"129000","5400":"132000","5500":"135000","5600":"138000","5700":"142000","5800":"145000","5900":"154000","6000":"158000"},
    "2400":{"700":"38000","800":"40000","900":"42000","1000":"44000","1100":"46000","1200":"48000","1300":"50000","1400":"52000","1500":"54000","1600":"57000","1700":"59000","1800":"61000","1900":"63000","2000":"65000","2100":"67000","2200":"68000","2300":"69000","2400":"70000","2500":"72000","2600":"73000","2700":"74000","2800":"75000","2900":"79000","3000":"80000","3100":"84000","3200":"84000","3300":"85000","3400":"86000","3500":"87000","3600":"88000","3700":"89000","3800":"90000","3900":"91000","4000":"92000","4100":"95000","4200":"96000","4300":"99000","4400":"101000","4500":"102000","4600":"105000","4700":"108000","4800":"111000","4900":"114000","5000":"117000","5100":"121000","5200":"124000","5300":"127000","5400":"130000","5500":"133000","5600":"136000","5700":"140000","5800":"143000","5900":"146000","6000":"156000"},
    "2350":{"700":"37000","800":"39000","900":"41000","1000":"43000","1100":"46000","1200":"48000","1300":"50000","1400":"52000","1500":"54000","1600":"56000","1700":"58000","1800":"60000","1900":"63000","2000":"65000","2100":"66000","2200":"67000","2300":"68000","2400":"69000","2500":"71000","2600":"72000","2700":"73000","2800":"74000","2900":"77000","3000":"79000","3100":"83000","3200":"84000","3300":"84000","3400":"85000","3500":"85000","3600":"86000","3700":"87000","3800":"88000","3900":"89000","4000":"92000","4100":"94000","4200":"95000","4300":"98000","4400":"100000","4500":"100000","4600":"103000","4700":"106000","4800":"109000","4900":"112000","5000":"115000","5100":"119000","5200":"122000","5300":"125000","5400":"128000","5500":"131000","5600":"134000","5700":"137000","5800":"141000","5900":"144000","6000":"154000"},
    "2300":{"700":"37000","800":"39000","900":"41000","1000":"43000","1100":"45000","1200":"47000","1300":"49000","1400":"51000","1500":"53000","1600":"56000","1700":"58000","1800":"60000","1900":"62000","2000":"64000","2100":"65000","2200":"67000","2300":"68000","2400":"69000","2500":"70000","2600":"72000","2700":"73000","2800":"74000","2900":"75000","3000":"77000","3100":"82000","3200":"83000","3300":"84000","3400":"84000","3500":"84000","3600":"85000","3700":"86000","3800":"87000","3900":"88000","4000":"91000","4100":"93000","4200":"94000","4300":"96000","4400":"99000","4500":"98000","4600":"101000","4700":"104000","4800":"107000","4900":"110000","5000":"113000","5100":"116000","5200":"120000","5300":"123000","5400":"126000","5500":"129000","5600":"132000","5700":"135000","5800":"138000","5900":"142000","6000":"145000"},
    "2250":{"700":"36000","800":"38000","900":"40000","1000":"42000","1100":"44000","1200":"47000","1300":"49000","1400":"51000","1500":"53000","1600":"55000","1700":"57000","1800":"59000","1900":"62000","2000":"64000","2100":"65000","2200":"66000","2300":"67000","2400":"68000","2500":"70000","2600":"71000","2700":"72000","2800":"73000","2900":"74000","3000":"75000","3100":"81000","3200":"82000","3300":"83000","3400":"84000","3500":"84000","3600":"84000","3700":"85000","3800":"86000","3900":"87000","4000":"90000","4100":"92000","4200":"93000","4300":"95000","4400":"98000","4500":"95000","4600":"99000","4700":"102000","4800":"105000","4900":"108000","5000":"111000","5100":"114000","5200":"117000","5300":"121000","5400":"124000","5500":"127000","5600":"130000","5700":"133000","5800":"136000","5900":"140000","6000":"143000"},
    "2200":{"700":"36000","800":"38000","900":"40000","1000":"42000","1100":"44000","1200":"46000","1300":"48000","1400":"50000","1500":"52000","1600":"54000","1700":"57000","1800":"59000","1900":"61000","2000":"63000","2100":"64000","2200":"65000","2300":"67000","2400":"68000","2500":"69000","2600":"71000","2700":"72000","2800":"73000","2900":"74000","3000":"75000","3100":"80000","3200":"81000","3300":"82000","3400":"83000","3500":"84000","3600":"84000","3700":"84000","3800":"85000","3900":"86000","4000":"89000","4100":"91000","4200":"92000","4300":"94000","4400":"96000","4500":"94000","4600":"96000","4700":"100000","4800":"103000","4900":"106000","5000":"109000","5100":"112000","5200":"115000","5300":"119000","5400":"122000","5500":"125000","5600":"128000","5700":"131000","5800":"134000","5900":"137000","6000":"141000"},
    "2150":{"700":"35000","800":"37000","900":"39000","1000":"41000","1100":"43000","1200":"46000","1300":"48000","1400":"50000","1500":"52000","1600":"54000","1700":"56000","1800":"58000","1900":"61000","2000":"63000","2100":"64000","2200":"65000","2300":"66000","2400":"67000","2500":"69000","2600":"70000","2700":"71000","2800":"72000","2900":"73000","3000":"74000","3100":"79000","3200":"80000","3300":"81000","3400":"82000","3500":"83000","3600":"84000","3700":"84000","3800":"84000","3900":"85000","4000":"88000","4100":"90000","4200":"91000","4300":"93000","4400":"95000","4500":"93000","4600":"95000","4700":"98000","4800":"101000","4900":"104000","5000":"107000","5100":"110000","5200":"113000","5300":"116000","5400":"120000","5500":"123000","5600":"126000","5700":"129000","5800":"132000","5900":"135000","6000":"138000"},
    "2100":{"700":"35000","800":"37000","900":"39000","1000":"41000","1100":"43000","1200":"45000","1300":"47000","1400":"49000","1500":"51000","1600":"53000","1700":"56000","1800":"58000","1900":"60000","2000":"62000","2100":"63000","2200":"64000","2300":"65000","2400":"67000","2500":"68000","2600":"70000","2700":"71000","2800":"72000","2900":"73000","3000":"74000","3100":"78000","3200":"79000","3300":"80000","3400":"81000","3500":"82000","3600":"83000","3700":"84000","3800":"84000","3900":"84000","4000":"87000","4100":"89000","4200":"90000","4300":"92000","4400":"94000","4500":"92000","4600":"94000","4700":"96000","4800":"100000","4900":"102000","5000":"105000","5100":"108000","5200":"111000","5300":"114000","5400":"117000","5500":"121000","5600":"124000","5700":"127000","5800":"130000","5900":"133000","6000":"136000"},
    "2050":{"700":"34000","800":"36000","900":"38000","1000":"40000","1100":"42000","1200":"44000","1300":"47000","1400":"49000","1500":"51000","1600":"53000","1700":"55000","1800":"57000","1900":"60000","2000":"62000","2100":"63000","2200":"64000","2300":"65000","2400":"66000","2500":"68000","2600":"69000","2700":"70000","2800":"71000","2900":"72000","3000":"73000","3100":"77000","3200":"78000","3300":"79000","3400":"80000","3500":"81000","3600":"82000","3700":"83000","3800":"84000","3900":"84000","4000":"86000","4100":"88000","4200":"89000","4300":"91000","4400":"93000","4500":"91000","4600":"93000","4700":"95000","4800":"99000","4900":"101000","5000":"103000","5100":"106000","5200":"109000","5300":"112000","5400":"115000","5500":"119000","5600":"122000","5700":"125000","5800":"128000","5900":"131000","6000":"134000"},
    "2000":{"700":"33000","800":"36000","900":"38000","1000":"40000","1100":"42000","1200":"44000","1300":"46000","1400":"48000","1500":"50000","1600":"52000","1700":"54000","1800":"57000","1900":"59000","2000":"61000","2100":"62000","2200":"63000","2300":"64000","2400":"65000","2500":"67000","2600":"69000","2700":"70000","2800":"71000","2900":"72000","3000":"73000","3100":"75000","3200":"77000","3300":"78000","3400":"79000","3500":"80000","3600":"81000","3700":"82000","3800":"83000","3900":"84000","4000":"85000","4100":"87000","4200":"88000","4300":"90000","4400":"92000","4500":"90000","4600":"92000","4700":"94000","4800":"96000","4900":"99000","5000":"101000","5100":"104000","5200":"107000","5300":"110000","5400":"113000","5500":"116000","5600":"120000","5700":"123000","5800":"126000","5900":"129000","6000":"132000"}}`);

function round(num, precision) {
    num = parseFloat(num);
    if (!precision) return num;
    return Math.round(num / precision) * precision;
}

document.querySelector("[id='2']").onclick = () => {
    if (document.querySelector("[id='3']").style.opacity == 1) {
        document.querySelector("[id='3']").style.opacity = 0;
        document.querySelector("[id='2']").innerText = "Подробнее";
    } else {
        document.querySelector("[id='3']").style.opacity = 1;
        document.querySelector("[id='2']").innerText = "Скрыть";
    }
};

let obj = {};

document.addEventListener("DOMContentLoaded", (x) => {
    async function count() {
        obj = JSON.parse(
            `{"total":0,"options":[{"name":"Высота","input_id":"308906","value":"","total":""},{"name":"Ширина","input_id":"308909","value":"","total":""},{"name":"Герметизация швов по полу и стенам","input_id":"333197","value":"","total":""},{"name":"Гидроизоляция стен грунтом по бетону в 2 слоя","input_id":"333200","value":"","total":""},{"name":"Модуль пожаротушения","input_id":"333203","value":"","total":""},{"name":"Колесо – отбойники резиновые","input_id":"333206","value":"","total":""},{"name":"Демонтаж/Монтаж имеющегося отбойника","input_id":"333209","value":"","total":""},{"name":"Демонтаж имеющегося отбойника","input_id":"333212","value":"","total":""},{"name":"Глубина","input_id":"308912","value":"","total":""},{"name":"Отсутствие крыши","input_id":"308924","value":"","total":""},{"name":"Отсутствие 1 рольставни","input_id":"348980","value":"","total":""},{"name":"Доп. Рольставня","input_id":"309335","value":"","total":""},{"name":"Задняя стенка","input_id":"334130","value":"","total":""},{"name":"Задняя стенка(ширина)","input_id":"308936","value":"","total":""},{"name":"Задняя стенка(высота)","input_id":"334133","value":"","total":""},{"name":"Длина полки-1","input_id":"334139","value":"","total":""},{"name":"Длина полки-4","input_id":"349058","value":"","total":""},{"name":"Стойки","input_id":"308915","value":"","total":""},{"name":"Дно","input_id":"308942","value":"","total":""},{"name":"Перегородка(Высота)","input_id":"334148","value":"","total":""},{"name":"Штанга","input_id":"334151","value":"","total":""},{"name":"Длина","input_id":"334154","value":"","total":""},{"name":"Электропривод 1 ставни + 1 пульт","input_id":"308951","value":"","total":""},{"name":"Дополнительный пульт","input_id":"308954","value":"","total":""},{"name":"Отсутствие левой стенки","input_id":"308927","value":"","total":""},{"name":"Отсутствие правой стенки","input_id":"348929","value":"","total":""},{"name":"Длина полки-2","input_id":"349052","value":"","total":""},{"name":"Длина полки-3","input_id":"349055","value":"","total":""},{"name":"Длина полки-5","input_id":"349061","value":"","total":""}]}`
        );

        document.querySelector("[id='3']").style.opacity = 0;
        document.querySelector("[name='summ']").value = "";
        document.querySelector("[id='2']").innerText = "Загрузка...";

        for (let i = 0; i < obj.options.length; i++) {
            await window.EnvyCrmWidget.getDealValue({
                input_id: obj.options[i].input_id,
                type: "custom",
            })
                .catch((e) => {
                    console.log(e);
                })
                .then((data) => {
                    obj.options[i].value = parseFloat(data.value);
                    if (isNaN(obj.options[i].value)){
                        obj.options[i].value = 0
                    }
                    obj.options[i].total = 0;
                });
        }

        document.querySelector("[id='2']").innerText = "Подробнее";
        document.querySelector("[id='3']").innerText = "";

        function polka(param) {
            if (isNaN(param.value)){
                param.total = 0
                return param
            }
            let pol_gl =
                parseFloat(
                    obj.options.find((x) => x.name === "Глубина").value
                ) - 50;
            let pol_dl = param.value;

            if (round(pol_gl, 50) == 350) {
                param.total = (pol_dl / 1000) * 700;
            }
            switch (round(pol_gl, 100)) {
                case 300:
                    param.total = (pol_dl / 1000) * 550;
                    break;
                case 400:
                    param.total = (pol_dl / 1000) * 800;
                    break;
                case 500:
                    param.total = (pol_dl / 1000) * 1000;
                    break;
                case 600:
                    param.total = (pol_dl / 1000) * 1200;
                    break;
                case 700:
                    param.total = (pol_dl / 1000) * 1400;
                    break;
                case 800:
                    param.total = (pol_dl / 1000) * 1500;
                    break;
                case 900:
                    param.total = (pol_dl / 1000) * 1700;
                    break;
                case 1000:
                    param.total = (pol_dl / 1000) * 1900;
                    break;
                case 1100:
                    param.total = (pol_dl / 1000) * 2200;
                    break;
                case 1200:
                    param.total = (pol_dl / 1000) * 2400;
                    break;
                case 1300:
                    param.total = (pol_dl / 1000) * 2600;
                    break;
                case 1400:
                    param.total = (pol_dl / 1000) * 2800;
                    break;
            }

            return param;
        }

        for (let i = 0; i < obj.options.length; i++) {
            if (obj.options[i].name == "Высота") {
                obj.options[i].total = parseFloat(
                    base[`${round(obj.options[i].value, 50)}`][
                        `${round(
                            obj.options.find((x) => x.name === "Ширина").value,
                            100
                        )}`
                    ]
                );
                if (obj.options[i].total == 0 || isNaN(obj.options[i].total)) {
                    document.querySelector("[id='3']").innerText =
                        document.querySelector("[id='3']").innerText +
                        `\n---\nЦена базы не найдена!\n---\n`;
                    throw new Error("Цена базы не найдена!");
                }
            }
            if (obj.options[i].name == "Герметизация швов по полу и стенам") {
                obj.options[i].total = obj.options[i].value * 2500;
            }
            if (
                obj.options[i].name ==
                "Гидроизоляция стен грунтом по бетону в 2 слоя"
            ) {
                obj.options[i].total = obj.options[i].value * 2500;
            }
            if (obj.options[i].name == "Модуль пожаротушения") {
                obj.options[i].total = obj.options[i].value * 3500;
            }
            if (obj.options[i].name == "Колесо – отбойники резиновые") {
                obj.options[i].total = obj.options[i].value * 5000;
            }
            if (obj.options[i].name == "Демонтаж/Монтаж имеющегося отбойника") {
                obj.options[i].total = obj.options[i].value * 3500;
            }
            if (obj.options[i].name == "Демонтаж имеющегося отбойника") {
                obj.options[i].total = obj.options[i].value * 2000;
            }
            if (obj.options[i].name == "Отсутствие крыши") {
                if (obj.options[i].value == 1) {
                    obj.options[i].total = -700;
                }
            }
            if (obj.options[i].name == "Отсутствие 1 рольставни") {
                if (obj.options[i].value == 1) {
                    obj.options[i].total = -7000;
                }
            }
            if (obj.options[i].name == "Доп. Рольставня") {
                obj.options[i].total = obj.options[i].value * 7000;
            }
            if (obj.options[i].name == "Задняя стенка") {
                if (obj.options[i].value == 1269716) {
                    obj.options[i].total =
                        ((parseFloat(
                            obj.options.find(
                                (x) => x.name === "Задняя стенка(ширина)"
                            ).value
                        ) *
                            parseFloat(
                                obj.options.find(
                                    (x) => x.name === "Задняя стенка(высота)"
                                ).value
                            )) /
                            1000000) *
                        2000;
                }
            }
            if (obj.options[i].name == "Стойки") {
                obj.options[i].total = obj.options[i].value * 350;
            }
            if (obj.options[i].name == "Дно") {
                if (obj.options[i].value == 1) {
                    obj.options[i].total =
                        parseFloat(
                            obj.options.find((x) => x.name === "Ширина").value
                        ) * 2;
                }
            }
            if (obj.options[i].name == "Перегородка(Высота)") {
                obj.options[i].total = obj.options[i].value * 1.5;
            }
            if (obj.options[i].name == "Штанга") {
                obj.options[i].total =
                    obj.options[i].value *
                    parseFloat(
                        obj.options.find((x) => x.name === "Длина").value
                    ) *
                    1.5;
            }
            if (obj.options[i].name == "Электропривод 1 ставни + 1 пульт") {
                obj.options[i].total = 7000;
            }
            if (obj.options[i].name == "Дополнительный пульт") {
                obj.options[i].total = obj.options[i].value * 1500;
            }
            if (obj.options[i].name == "Отсутствие левой стенки") {
                if (obj.options[i].value == 1) {
                    obj.options[i].total = -2000;
                }
            }
            if (obj.options[i].name == "Отсутствие правой стенки") {
                if (obj.options[i].value == 1) {
                    obj.options[i].total = -2000;
                }
            }
            if (obj.options[i].name == "Длина полки-1") {
                obj.options[i] = polka(obj.options[i]);
            }
            if (obj.options[i].name == "Длина полки-2") {
                obj.options[i] = polka(obj.options[i]);
            }
            if (obj.options[i].name == "Длина полки-3") {
                obj.options[i] = polka(obj.options[i]);
            }
            if (obj.options[i].name == "Длина полки-4") {
                obj.options[i] = polka(obj.options[i]);
            }
            if (obj.options[i].name == "Длина полки-5") {
                obj.options[i] = polka(obj.options[i]);
            }

            obj.total = parseFloat(obj.total) + parseFloat(obj.options[i].total)
        }

        try {
            obj.total = obj.total.toFixed(0);
        } catch (error) {
            console.log(error);
        }

        if (!isNaN(obj.total)) {
            document.querySelector("[name='summ']").value = obj.total;
        } else {
            document.querySelector("[id='3']").innerText =
                document.querySelector("[id='3']").innerText +
                `\n---\ntotal не число!\n---\n`;
            throw new Error("total не число!");
        }

        for (let i = 0; i < obj.options.length; i++) {
            if (obj.options[i].total != 0) {
                if (obj.options[i].name == "Высота") {
                    document.querySelector("[id='3']").innerText =
                        document.querySelector("[id='3']").innerText +
                        `База * ${round(obj.options[i].value, 50)} * ${round(
                            obj.options.find((x) => x.name === "Ширина").value,
                            100
                        )} = ${obj.options[i].total}` +
                        "\n";
                } else if (obj.options[i].name == "Ширина") {
                } else {
                    document.querySelector("[id='3']").innerText =
                        document.querySelector("[id='3']").innerText +
                        `${obj.options[i].name} * ${obj.options[i].value} = ${obj.options[i].total}` +
                        "\n";
                }
            }
        }

        console.log("obj", obj);

        await window.EnvyCrmWidget.changeDealValue({
            input_id: 333215,
            value: obj.total,
        })
            .catch((e) => {
                console.log(e);
            })
            .then((data) => {
                // console.log(data);
            });
    }

    document.querySelector("#btn").onclick = function () {
        count();
    };

    window.addEventListener(
        "message",
        function (event) {
            if (event.data.type == "deal::update-value") {
                if (event.data.data.params.data.input_id != 333215) {
                    count();
                }
            }
        },
        false
    );

    try {
        count();
    } catch (error) {
        console.log(error);
        document.querySelector("[id='3']").innerText =
            document.querySelector("[id='3']").innerText +
            `\n---\nОшибка: ${error}\n---\n`;
        throw new Error(error);
    }
});
