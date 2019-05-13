export function html() {
    let a = 
    "<div class='p_docmanageroot'><table width='958' style='width: 719pt; border-collapse: collapse;' border='0' cellspacing='0' cellpadding='0'>"+
    "<colgroup><col width='160' style='width: 120pt; mso-width-source: userset; mso-width-alt: 5120;'>"+
    "<col width='680' style='width: 510pt; mso-width-source: userset; mso-width-alt: 21760;'>"+
    "<col width='118' style='width: 89pt; mso-width-source: userset; mso-width-alt: 3776;'>"+
    "</colgroup><tbody><tr height='22' style='height: 16.5pt;'>"+
     "<td width='958' height='22' class='xl83' style='width: 719pt; height: 22px; text-align: center; font-size: 25pt; font-weight: 700;' colspan='3'>일일업무일지</td></tr>"+
    "<tr height='22' style='height: 16.5pt;'></tr>"+
    "<tr height='22' style='height: 50pt;'>"+
    "<td height='22' class='xl66' style='background: rgb(217, 217, 217); border: 0.75pt solid windowtext; border-image: none; height: 16.5pt; text-align: center; font-size: 16pt; font-weight: 700;'><b>오늘의<br>주요업무</b></td>"+
    "<td width='680' class='xl67' style='background: rgb(255, 255, 255); border: 0.75pt solid windowtext; border-image: none; width: 510pt; text-align: center; font-size: 9pt; font-weight: 700; white-space: normal;' colspan="+'"'+"2"+'"'+">"+"</td>"+
    "<tr height='48' style='height: 36pt;'>"+
        "<td height='22' class='xl66' style='background: rgb(217, 217, 217); border: 0.75pt solid windowtext; border-image: none; height: 16.5pt; text-align: center; font-size: 16pt; font-weight: 700;' colspan="+"'"+"4"+"'"+"><b>세부업무내용</b></td>"+
      "<tr height='48' style='height: 36pt;'>"+
     "<td width='680' class='xl77' style='border: 0.75pt solid windowtext; border-image: none; width: 510pt; font-size: 16pt; white-space: normal; text-align: center;' colspan="+'"'+"2"+'"'+"><b>업무내용</b></td>"+
     "<td class='xl69' style='border: 0.75pt solid windowtext; border-image: none; font-size: 16pt; text-align: center;'><b>비고</b></td></tr>"+
    "<tr height='48' style='height: 36pt;'>"+
    "<td width='680' class='xl77' style='border: 0.75pt solid windowtext; border-image: none; width: 510pt; color: windowtext; font-size: 9pt; white-space: normal;' colspan="+'"'+"2"+'"'+"></td>"+
     "<td class='xl69' style='border: 0.75pt solid windowtext; border-image: none; font-size: 9pt;'></td></tr>"+
    "<tr height='48' style='height: 36pt;'>"+
    "<td width='680' class='xl77' style='border: 0.75pt solid windowtext; border-image: none; width: 510pt; color: windowtext; font-size: 9pt; white-space: normal;' colspan="+'"'+"2"+'"'+"></td>"+
     "<td class='xl69' style='border: 0.75pt solid windowtext; border-image: none; font-size: 9pt;'></td></tr>"+
   "<tr height='48' style='height: 36pt;'>"+
    "<td width='680' class='xl77' style='border: 0.75pt solid windowtext; border-image: none; width: 510pt; color: windowtext; font-size: 9pt; white-space: normal;' colspan="+'"'+"2"+'"'+"></td>"+
     "<td class='xl69' style='border: 0.75pt solid windowtext; border-image: none; font-size: 9pt;'></td></tr>"+
   "<tr height='48' style='height: 36pt;'>"+
    "<td width='680' class='xl77' style='border: 0.75pt solid windowtext; border-image: none; width: 510pt; color: windowtext; font-size: 9pt; white-space: normal;' colspan="+'"'+"2"+'"'+"></td>"+
    "<td class='xl69' style='border: 0.75pt solid windowtext; border-image: none; font-size: 9pt;'></td></tr>"+
    "<tr height='48' style='height: 36pt;'>"+
    "<td width='680' class='xl77' style='border: 0.75pt solid windowtext; border-image: none; width: 510pt; color: windowtext; font-size: 9pt; white-space: normal;' colspan="+'"'+"2"+'"'+"></td>"+
    "<td class='xl69' style='border: 0.75pt solid windowtext; border-image: none; font-size: 9pt;'></td></tr>"+
    "<tr height='22' style='height: 16.5pt;'></tr>"+
    "<tr height='22' style='height: 45pt;'>"+
     "<td height='22' class='xl66' style='background: rgb(255, 255, 255); border: 0.75pt solid windowtext; border-image: none; height: 16.5pt; text-align: center; font-size: 14pt; font-weight: 700;'><b>미 종결 업무사항</b></td>"+
     "<td width='680' class='xl67' style='background: rgb(255, 255, 255); border: 0.75pt solid windowtext; border-image: none; width: 510pt; text-align: center; font-size: 9pt; font-weight: 700; white-space: normal;' colspan="+'"'+"2"+'"'+"></td></tr>"+
    "<tr height='22' style='height: 45pt;'>"+
     "<td height='22' class='xl66' style='background: rgb(255, 255, 255); border: 0.75pt solid windowtext; border-image: none; height: 16.5pt; text-align: center; font-size: 14pt; font-weight: 700;'><b>특이사항</b></td>"+
     "<td width='680' class='xl67' style='background: rgb(255, 255, 255); border: 0.75pt solid windowtext; border-image: none; width: 510pt; text-align: center; font-size: 9pt; font-weight: 700; white-space: normal;' colspan="+'"'+"2"+'"'+"></td></tr>"+
    "</tbody></table></div><p><br></p>"
    console.log(a.byteLength());
    return a;
};

String.prototype.byteLength = function() {
    var l= 0;
     
    for(var idx=0; idx < this.length; idx++) {
        var c = escape(this.charAt(idx));
         
        if( c.length==1 ) l ++;
        else if( c.indexOf("%u")!=-1 ) l += 2;
        else if( c.indexOf("%")!=-1 ) l += c.length/3;
    }
     
    return l;
};

