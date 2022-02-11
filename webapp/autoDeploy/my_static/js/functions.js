/**
 * Created by mohamed on 15/05/15.
 */

function checkServers(servers)
{
    html='<table class="paleblue">'
    html+='<tr><th>Sever</th><th>Status</th></tr>'
    for (server in servers) {

        html += "<tr><td>" + server + "</td>"

        if (servers[server] == "UP")
            html += '<td><div class="alert alert-success">OK</div> </td>'
        else
            html += '<td><div class="alert alert-danger">Offline</div> </td>'

        html += "</tr>"
    }
    html+='</table>'
    $("#content").html(html)
    }


function renderResult(data,success) {
    html=""
    console.log(data)
    if (data == "Done")
        html = "<div class='alert alert-success'>"+success+"</div>"
    else
        html = "<div class='alert alert-danger' align='left'><pre>" + data + "</pre></div>"


    $("#content").html(html)
}

function clone(data)
{
    renderResult(data,"Cloning is successful")
}
function deploy(data)
{
    if (data.indexOf("Done")>-1)
    {
        res = data.split(",,")
        renderResult(res[0], "Deployment was successful. Visit <a target='_blank' href='" + res[1] + "'>" + res[1] + "</a>")
    }
    else
        renderResult(data,"Done.")
}