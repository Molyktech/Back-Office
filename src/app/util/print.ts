export class Print {
  static print(id) {
    let printContent, WindowPrt;
    printContent = document.getElementById(id).innerHTML;
    WindowPrt = window.open(
      '',
      '_blank',
      'top=0,left=0,height=100%,width=auto'
    );
    WindowPrt.document.open();

    WindowPrt.document.write(`
              <html>
                <head>
                  <title>Print tab</title>
                  <style>
                  .head-text h3 {
                    letter-spacing: 1px;
                    padding: 10px;
                    font-weight: bolder;
                    font-family: Georgia, serif;
                    line-height: 1.3em;
                  }

                  .text-block p {
                    font-family: Georgia, serif;
                    letter-spacing: 1px;
                    word-spacing: 2px;
                    padding: 10px;
                  }
                  .modal-body{

                    text-align: center;
                  }
                  button { display:none}

                  </style>
                </head>
            <body onload="window.print();window.close()">${printContent}</body>
              </html>`);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }

  static printDocument(id) {
    let printContent, WindowPrt;
    printContent = document.getElementById(id).innerHTML;
    WindowPrt = window.open(
      '',
      '_blank',
      'top=0,left=0,height=100%,width=auto'
    );
    WindowPrt.document.open();

    WindowPrt.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          body {
            margin: 0;
            padding: 0;
            background: #efefef;
          }

          .paper {
            position: relative;
            margin: 40px auto;
            width: 600px;
            height: auto;
            background: #fff;
            border-radius: 2px;
            padding: 5px 10px;
          }

          .paper::before,
          .paper::after {
            content: '';
            position: absolute;
            bottom: 10px;
            width: 40%;
            height: 10px;

            z-index: -1;

          }

          .header {
            margin: 13px;
            display: flex;
            text-align: center;
            justify-content: space-evenly;

          }

          .header img {
            width: 90px;
            height: auto;
          }

          .header h5 {
            font-weight: 600;
          }

          .panel {
            background-color: green;
            font-weight: 700;
            color: white;
            text-align: center;
          }

          .declaration {
            margin-top: 10px;
          }

          .declaration p,
          .declaration input {
            text-transform: uppercase;
          }

          .declaration p {
            font-size: 1em;
          }

          .twins {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
          }
          .c9 {
            flex-grow: 3
          }
          .sign{
            margin-top:3px;
          }

          input.signature {
            border: none;
          }

          input.signature1 {
            border-bottom: 1px solid black
          }

          input.signature:focus {
            outline: none;
          }

          input.signature2 {
            border-bottom: 1px dotted black;
          }

          .footer {
            display: flex;
          }

          .declarant{
            display:flex;
            justify-content: flex-end;
          }
          .commisioner{
            display:flex;
            justify-content: flex-end;

          }

          .thumb {
            display: flex;
            flex-direction: column-reverse;
          }

          .oath {
            border: 2px solid rgb(65, 65, 65);
            color: #fff;
            padding: 4px 2px 0 2px;
            font-weight: 900;
            width:110px;
            height:40px;
            text-align:center;
            background: rgb(65, 65, 65);
            margin-right: 7px;
          }

          .oath p {
            margin: 5px auto;
          }


          </style>
        </head>
    <body onload="window.print();window.close()">${printContent}</body>
      </html>`);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
}
