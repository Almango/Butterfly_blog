function enter() {

    // 创建一个 p 元素
    var p = document.createElement("p");
    // 可以设置 p 元素的文本内容
    p.textContent = "$ Root/user/control>";
    // p.setAttribute("contenteditable","true");
    var AppendContent = document.getElementsByClassName("windows-content")[0];
    // 将 p 元素添加到页面的某个元素中，例如添加到 body 中
    AppendContent.appendChild(p);


    var p = document.createElement("p");
    
    p.style.display = "inline-block";

    p.style.marginTop = "-40px";

    // 可以设置 p 元素的文本内容
    p.addEventListener("input", () => {
        // 将内容设置为纯文本，移除所有 HTML 标签
        p.textContent = p.textContent;
    });
    p.setAttribute("class", "terminalinput");
    p.setAttribute("contenteditable", "true");
    var GetTagName = document.getElementsByTagName("p");
    var AppendContent = GetTagName[GetTagName.length - 1];
    // 将 p 元素添加到页面的某个元素中，例如添加到 body 中
    AppendContent.appendChild(p);
    AppendContent.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            event.preventDefault
            Judgment();
            p.setAttribute("contenteditable", "false");
        }
    })
    AppendContent.scrollIntoView({ behavior: "smooth", block: "end" });
    p.innerHTML = "";
    p.focus();

}

function Judgment() {
    var Set_terminalinput = document.getElementsByTagName("p")
    var End_terminalinput = Set_terminalinput[Set_terminalinput.length - 1].textContent;

    var Judgment_Command = End_terminalinput.split(" ")[0];
    console.log(Judgment_Command);
    if (Judgment_Command == "help") {
        help();
    }
    else if (Judgment_Command == "ew") {
        EW_Command();
    }
    else if (Judgment_Command == "iw") {
        IW_Command()
    }
    else if (Judgment_Command == "cc") {
        CC_Command();
    }
    else if (Judgment_Command == "check") {
        check_Command();
    }
    else if (Judgment_Command == "close") {
        window.close();
    }

    else if (Judgment_Command == "nmsl") {
        NMSL_Command();
    }
    // else if (Judgment_Command == "etw") {
    //     ETW_Command();
    // }
    else {
        Execute_Fail();
        enter();
    }
}

function Execute_Success() {
    const nowtimes = new Date();
    var NowTime = nowtimes.toLocaleString();
    var p = document.createElement("p");
    p.textContent = `[${NowTime}]: 成功执行一个命令`;
    p.style.color = "green";
    // p.setAttribute("contenteditable","true");
    var AppendContent = document.getElementsByClassName("windows-content")[0];
    AppendContent.appendChild(p);
}

function Execute_Fail() {
    const nowtimes = new Date();
    var NowTime = nowtimes.toLocaleString();

    var p = document.createElement("p");
    p.textContent = `[${NowTime}]: 无法识别的命令`;
    p.style.color = "#f04747";
    // p.setAttribute("contenteditable","true");
    var AppendContent = document.getElementsByClassName("windows-content")[0];
    // 将 p 元素添加到页面的某个元素中，例如添加到 body 中
    AppendContent.appendChild(p);

}

function closeterminal()
{
    window.close();
    
}