const now = new Date();
var NowTime = now.toLocaleString();


function Command_Execute_Success() {
    var p = document.createElement("p");
    p.textContent = `[${NowTime}]: 成功执行一个命令`;
    p.style.color = "green";
    // p.setAttribute("contenteditable","true");
    var AppendContent = document.getElementsByClassName("windows-content")[0];
    AppendContent.appendChild(p);
}
function Command_Execute_Fail(Next_Command) {
    var p = document.createElement("p");
    p.textContent = `[${NowTime}]: 无法识别的命令:  ` + "\'" + Next_Command + "\'";
    p.style.color = "#f04747";
    // p.setAttribute("contenteditable","true");
    var AppendContent = document.getElementsByClassName("windows-content")[0];
    // 将 p 元素添加到页面的某个元素中，例如添加到 body 中
    AppendContent.appendChild(p);
}

function help() {
    var p = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    p2.className = "helpptag"
    p.textContent = "----------------- HELP PANEL -------------------";
    p3.textContent = "------------------------------------------------";
    p2.textContent = "help ·························· 帮助\n" +
        "cc ···························· 自定义字体颜色(demo)\n" +
        "ew ···························· 进入管理员站点(demo)\n" +
        "iw ···························· 进入指定的网站(demo)\n" +
        "check ························· 检查\n" +
    "close ························· 关闭终端\n";

    // p.setAttribute("contenteditable","true");
    var AppendContent = document.getElementsByClassName("windows-content")[0];
    AppendContent.appendChild(p);
    AppendContent.appendChild(p2);
    AppendContent.appendChild(p3);
    Execute_Success()
    enter();

}


function EW_Command() {
    var Set_terminalinput = document.getElementsByTagName("p")
    var End_terminalinput = Set_terminalinput[Set_terminalinput.length - 1].textContent;
    var Next_Command = End_terminalinput.split(" ")[1];

    if (Next_Command == "Almango") {
        window.open("https://almango.cn/", "_target");
        Execute_Success()
        enter()
    }
    else if (Next_Command == "YOUXIANYU") {
        window.open("https://youxianyu.cn/", "_target");
        Execute_Success()
        enter()

    }
    else if (Next_Command == "lizhi") {
        window.open("https://lizhic.cn/", "_target");
        Execute_Success()
        enter()

    }
    else {
        Command_Execute_Fail(Next_Command)
        enter()
    }
}

function IW_Command() {
    var Set_terminalinput = document.getElementsByTagName("p")
    var End_terminalinput = Set_terminalinput[Set_terminalinput.length - 1].textContent;
    var Next_Command = End_terminalinput.split(" ");
    console.log(Next_Command);
    if (Next_Command.length == 2) {

        Command_Execute_Success();
        enter();
        console.log(Next_Command[1])
        window.open(Next_Command[1], "_target");
    }
    else {
        Command_Execute_Fail(Next_Command[1]);
        enter();
    }
}
function check_Command() {
    var Set_terminalinput = document.getElementsByTagName("p")
    var End_terminalinput = Set_terminalinput[Set_terminalinput.length - 1].textContent;
    var Next_Command = End_terminalinput.split(" ")[1];
    if (Next_Command == "computerinfo") {
        //////////////////---核心出装----////////////////////
        const canvas = document.createElement('canvas'),
            gl = canvas.getContext('experimental-webgl'),
            debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const info = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        ////////////////////////////////////////////////////
        console.log(info);
        var GPU1 = info.split("(");
        var GPU2 = GPU1.join(", ");
        var GPU = GPU2.split(",")
        var p_GPU = document.createElement("p");
        p_GPU.textContent = "GPU：" + GPU[2];

        var NT = navigator.userAgent.split("(")
        var NT_1 = NT[1];
        var NT_2 = NT_1.split(";")
        console.log(NT_2[0])
        var p_System_Core = document.createElement("p");
        p_System_Core.textContent = "SystemCore：" + NT_2[0];

        const memorySize = navigator.deviceMemory * 2;
        var p_RAM = document.createElement("p");
        p_RAM.textContent = "RAM：" + "SSD " + memorySize + "GB";

        // p.setAttribute("contenteditable","true");
        var AppendContent = document.getElementsByClassName("windows-content")[0];
        AppendContent.appendChild(p_GPU);
        AppendContent.appendChild(p_System_Core);
        AppendContent.appendChild(p_RAM);
        Command_Execute_Success()
        enter();
    }
    else {
        Command_Execute_Fail(Next_Command);
        enter();
    }


}

function CC_Command() {
    var Set_terminalinput = document.getElementsByTagName("p")
    var End_terminalinput = Set_terminalinput[Set_terminalinput.length - 1].textContent;
    var set_PTag = document.getElementsByTagName("p");
    var Next_Command = End_terminalinput.split(" ");
    if (Next_Command.length == 2) {
        for (var i = 1; i < set_PTag.length; i++) {
            set_PTag[i].style.color = Next_Command[1];
        }
        enter();
        Command_Execute_Success();
    }
    else { 
        Command_Execute_Fail(Next_Command);
        enter();
    }
}

function NMSL_Command() {
    console.log("Shit！！！，不可以骂人哦！");
    var p = document.createElement("p");
    p.textContent = "[NMSL]:Shit！！！你妈死了！！！";
    p.style.color = "yellow";
    // p.setAttribute("contenteditable","true");
    var AppendContent = document.getElementsByClassName("windows-content")[0];
    AppendContent.appendChild(p);
    enter();

}