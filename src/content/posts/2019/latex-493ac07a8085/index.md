---
title: "เริ่มเขียน LaTeX เบื้องต้น"
date: 2019-10-08
categories:
  - "tech"
tags:
  - "tutorial"
coverImage: "./images/1XF-1pdcttSzXu-5spGULHA.jpg"
public: true
---

ปีนี้ก็อยู่ในชั้นปีสุดท้ายของปริญญาตรีแล้ว แน่นอนว่าต้องทำปริญญานิพนธ์ หรือที่เรียกว่าโปรเจ็กต์จบ ซึ่งถือเป็นงานชิ้นหนึ่งที่มีความสำคัญมาก จะให้พลาดแม้แต่จุดเดียวไม่ได้ เรื่องของเอกสารก็เช่นกัน ทุกอย่างต้องอยู่ในสถานะปลอดภัยที่สุด

<!--more-->

ด้วยความปลอดภัยไว้ก่อน เราเลยอยากลดความเสี่ยงการเสียหายของไฟล์เอกสารให้มากที่สุด แบ็คอัพนู่นนี่ และเลือกใช้ไฟล์แบบมาร์กอัป (markup) แทนไฟล์พิเศษอย่าง Word (หรือ Pages… ถ้าคิดจะใช้ทำปริญญานิพนธ์อะนะ) เพื่อให้สามารถเห็นตัวหนังสือได้จากโปรแกรมใดก็ได้ เพราะมันเป็นแค่ไฟล์ข้อความธรรมดา (plain text)

การมาใช้ LaTeX ทำให้ต้องเรียนรู้อะไรหลายอย่างพอสมควร เราก็เริ่มจากการลองเขียนเอกสารง่ายๆ ดูก่อน แล้วก็เริ่มศึกษาจากไฟล์ “คลาส” ที่มีคนเขียนไว้ ซึ่งสำหรับปริญญานิพนธ์ของคณะเราก็มีพี่ [Boonyarith](https://medium.com/u/59f858e48fab) ทำ[คลาสของรูปเล่มสหกิจ](https://github.com/dsmlr/IT-KMITL-Latex)ไว้แล้ว และเราเองก็[ฟอร์กมา](https://github.com/DobaKung/IT-KMITL-Latex)ทำรูปเล่มของโปรเจ็กต์ด้วย คงจะได้ปล่อยเร็วๆ นี้ (มั้ง)

**ก่อนอื่นขอบอกก่อนเลยว่าเราก็เพิ่งจะเขียน LaTeX ได้ไม่นานนะ แต่ก็อยากจะเอาประสบการณ์มาแบ่งปันกันว่าควรจะเริ่มเขียนอย่างไรดี เพราะมีเพื่อนๆ ถามกันมาหลายคน**

> อาจจะยาวหน่อย แต่แนะนำว่าอย่าอ่านข้ามๆ นะครับ

💡 โค้ดของบทความนี้ดูได้ที่ลิงก์ Github นี้เลย [https://github.com/DobaKung/latex-tutorial/](https://github.com/DobaKung/latex-tutorial/)

# LaTeX คืออะไร

เกริ่นมาซะยาว ก่อนอื่นเราต้องรู้จักกันก่อนว่า LaTeX มันคือระบบสำหรับการวางโครงเอกสาร หรือที่เรียกว่ามาร์กอัป **เป็นการพิมพ์ด้วยข้อความธรรมดาเป็นคำสั่ง** แทนที่จะเป็นการแก้ไขเอกสารแบบ WYSIWYG (What you see is what you get) เหมือนใน Microsoft Word, Google Docs หรือ Apple Pages อย่างที่เราคุ้นเคย ที่แค่เลือกข้อความแล้วคลิกทำตัวหนา หรือลากคลุมแล้วจัดให้อยู่ตรงกลางหน้า

ตัวอย่างไฟล์ LaTeX แบบง่ายๆ (เอ๊ะ `xelatex` ในภาพคืออะไร? เดี๋ยวจะมาอธิบาย)

<figure>

![](./images/1_ePJvaOw9LT2PVYleEEqBtA.webp)
<figcaption>
ภาพ 1: ตัวอย่างไฟล์ LaTeX แบบง่ายๆ
</figcaption>
</figure>

คำศัพท์ที่ควรรู้เกี่ยวกับโลกของ LaTeX (ดูเพิ่มเติมที่ [http://www.tug.org/levels.html](http://www.tug.org/levels.html))

- TeX: เป็นระบบมาโครที่ LaTeX พัฒนาต่อขึ้นมาอีกที เพื่อให้มนุษย์ธรรมดาใช้งาน TeX สร้างเอกสารได้ง่ายขึ้น

- Engine: เป็นคอมไพเลอร์ หรือก็คือโปรแกรมที่จะทำหน้าที่คอมไพล์เอกสารของเรา

- Package: ซอฟต์แวร์ที่เป็นส่วนเสริม เอาไว้เพิ่มความสามารถ เช่น ใส่กราฟ ทำตาราง

- Distribution: ขอแปลว่า “ชุดซอฟต์แวร์” ก็แล้วกัน เป็นชุดซอฟต์แวร์ที่มีเอนจิ้นและแพคเกจพื้นฐานต่างๆ ในการทำงานกับ TeX มาให้

# ขั้นตอนการทำงานกับ LaTeX

จากที่เขียน LaTeX มาได้สักพัก เราก็สรุปขั้นตอนการทำงานใหญ่ๆ ได้เป็นสองขั้นตอน นั่นคือการเขียน และการคอมไพล์

1. การเขียน ก็ตรงตัวเลย เราพิมพ์เนื้อหาและคำสั่งต่างๆ เพื่อกำหนดโครงสร้างของเอกสาร
2. การคอมไพล์ คือการนำไฟล์ที่เราเขียนมาประมวลผลกลายเป็นไฟล์งานสมบูรณ์ จะได้เป็นไฟล์ PDF ออกมา

<figure>

![](./images/1_fQgKw6pd1_K66FPsAV4ivA.webp)
<figcaption>
ภาพ 2: ขั้นตอนการทำงานกับ LaTeX
</figcaption>
</figure>

ในการเขียน เราสามารถใช้โปรแกรมแก้ไขข้อความใดๆ ก็ได้ ตั้งแต่ Notepad, Sublime Text, VS Code, Atom, Vim หรือใช้โปรแกรมอย่าง TeXworks และ TeXStudio ก็ได้เช่นกัน เนื่องจาก LaTeX นั้นเป็นเพียงไฟล์ plain text ธรรมดาอย่างที่บอกไป

สำหรับการคอมไพล์ มีหลายเอนจิ้นให้เราเลือกใช้ ไม่ว่าจะเป็น pdfLaTeX, XeLaTeX และ LuaLaTeX เป็นต้น แต่ละเอนจิ้นอาจมีการทำงานภายในต่างกัน ทำให้คำสั่งบางคำสั่งเราต้องใช้งานให้ถูกต้องกับเอนจิ้นที่เราจะใช้คอมไพล์ด้วย **ซึ่งในบทความนี้เราจะใช้เอนจิ้น XeLaTeX นะครับ**

# ติดตั้งโปรแกรม

หลักๆ แล้วในโลกของ TeX ก็มี distribution ที่นิยมอยู่สองชุด คือ TeX Live และ MiKTeX โดยทั้งสองชุดซอฟต์แวร์นี้ก็จะมาพร้อมกับคอมไพเลอร์ต่างๆ ไม่ว่าจะเป็น pdfTeX, pdfLaTeX, XeTeX, XeLaTeX, … และแพ็คเกจพื้นฐานมาให้

จากการที่ใช้งานมาทั้งสองชุด เราพบว่า MiKTeX ใช้งานได้ง่ายที่สุด เพราะเวลาเอกสารของเราต้องการแพ็คเกจอะไรเพิ่มเติมที่ยังไม่ได้ติดตั้งไว้ในเครื่อง MiKTeX ก็จะขึ้นข้อความถามเราเลยว่าจะติดตั้งแพ็คเกจนั้นๆ หรือไม่ ซึ่งถ้าเป็น TeX Live เราจะต้องไปหาและติดตั้งเองผ่านตัวจัดการแพ็คเกจของ TeX Live **เพราะฉะนั้นในบทความนี้เราจะใช้ชุดซอฟต์แวร์ MiKTeX กันครับ**

วิธีติดตั้งขอเขียนเฉพาะ Windows กับ macOS นะ เราเชื่อว่าใครที่ใช้ Linux ก็จะหาวิธีลง MiKTeX ได้เองอยู่แล้ว 😆

## Windows

1: ดาวน์โหลดตัวติดตั้งจากเว็บไซต์ [https://miktex.org/download](https://miktex.org/download) โดยเลือกที่ Windows แบบ Installer (ใครที่ใช้ Chocolatey น่าจะลงผ่าน choco install miktex ได้นะ แต่ยังไม่เคยลอง)

<figure>

![](./images/1_9rvqEXhTGE4CQDsTCXqa7Q.webp)
<figcaption>
ภาพ 3: หน้าดาวน์โหลด MiKTeX สำหรับ Windows
</figcaption>
</figure>

2: เปิดไฟล์ที่ดาวน์โหลดมา และทำตามคำสั่งบนหน้าจอ มีไม่กี่ขั้นตอน (ดูวิธีจาก [https://miktex.org/howto/install-miktex](https://miktex.org/howto/install-miktex) ได้เลย)

3: เมื่อติดตั้งเสร็จแล้ว ลองพิมพ์หาคำว่า _miktex_ ใน Start Menu ก็ควรจะเจอโปรแกรม MiKTeX Console ถือว่าติดตั้ง MiKTeX เสร็จเรียบร้อย

<figure>

![](./images/1_FeCTSC4YRFQ8WGeolPH3KQ.webp)
<figcaption>
ภาพ 4: ลองค้นหาโปรแกรม MiKTeX
</figcaption>
</figure>

## macOS

1: ดาวน์โหลดตัวติดตั้งจากเว็บไซต์ [https://miktex.org/download](https://miktex.org/download) โดยเลือกที่ Mac (ใน Homebrew ก็มีนะ `brew cask install miktex-console`)

<figure>

![](./images/1_Rof8shBAPZGQg4e8cON6DA.webp)
<figcaption>
ภาพ 5: หน้าดาวน์โหลด MiKTeX สำหรับ macOS
</figcaption>
</figure>

2: เปิดไฟล์ที่ดาวน์โหลดมา แล้วลาก MiKTeX Console เข้าไปในโฟลเดอร์ Applications ตามปกติเหมือนเวลาลงแอปบนแมคตัวอื่นๆ

3: เปิดแอป MiKTeX ในเครื่องขึ้นมา (อันที่อยู่ใน Launchpad หรือโฟลเดอร์ Applications นั่นแหละ) แล้วทำตามหน้าจอ แนะนำให้เลือกเป็น _Finish private setup_ ก็พอ รอจนติดตั้งเสร็จ

4: เมื่อเลือกตามข้อ 3 แล้ว ไบนารีของ MiKTeX จะอยู่ที่โฟลเดอร์ `~/bin` ซึ่ง shell ไม่รู้จักสถานที่นี้แน่ เราต้องไปเพิ่ม PATH ใน shell ของเราด้วย ขอแสดงตัวอย่างสักสาม shell นะ เปิด Terminal ขึ้นมาเลย

- สำหรับ Bash (ดีฟอลต์ของ macOS ก่อนหน้า 10.15) รันคำสั่งตามนี้เพื่อเพิ่ม PATH ใน .bash\_profile ครับ
    `echo export 'PATH=~/bin:$PATH' >> ~/.bash_profile`

- สำหรับ Zsh (ดีฟอลต์ของ macOS 10.15 ขึ้นไป) รันคำสั่งนี้เพื่อเพิ่ม PATH ใน .zshrc ครับ 
    `echo export 'PATH=~/bin:$PATH' >> ~/.zshrc`

- สำหรับ Fish ใช้คำสั่งนี้เพื่อเพิ่ม PATH ไปยังไฟล์ config.fish 
    `echo 'set PATH ~/bin $PATH' >> ~/.config/fish/config.fish`

# เริ่มเขียน LaTeX ไฟล์แรก

เปิด text editor ที่จะใช้งานขึ้นมาครับ จะ Notepad, Sublime Text, VS Code หรืออะไรก็แล้วแต่สะดวกเลย แนะนำให้ลงส่วนเสริม (extension) สำหรับการไฮไลท์โค้ดด้วยนะครับ ลองหาส่วนเสริมจากชื่อ ‘latex’ ใน text editor ของตัวเองได้เลย

สร้างไฟล์ใหม่ขึ้นมา ตั้งชื่อว่าอะไรก็ได้ ในที่นี้ตั้งชื่อว่า `latex-tut-01.tex` ครับ แล้วลองคัดลอกโค้ดด้านล่างไปใส่ในไฟล์

```
% !TEX TS-program = xelatex
% !TEX encoding = UTF-8

\documentclass[11pt, a4paper]{report}

\title{My First \LaTeX Document}
\author{John Doe}

\begin{document}
\maketitle

Hello World

\end{document}
```

ข้อความในบรรทัดก่อนที่จะถึง `\begin{document}` เราเรียกว่า "Preamble" ใช้ในการตั้งค่าของเอกสาร ไม่ว่าจะเป็นขนาดกระดาษ แพ็คเกจที่ต้องใช้ ชื่อเอกสาร ผู้แต่ง เป็นต้น เราจะมาดูกันทีละบรรทัด

```
% !TEX TS-program = xelatex% !TEX encoding = UTF-8
```

สองบรรทัดแรกเป็นคอมเมนต์ (ส่วนที่จะไม่ถูกประมวลผล) มีเครื่องหมายเปอร์เซ็นต์นำหน้า แต่คอมเมนต์สองบรรทัดนี้เป็นคอมเมนต์พิเศษที่โปรแกรมอย่าง TeXShop และ TeXworks จะอ่าน เพื่อตั้งค่าเอนจิ้นเป็น XeLaTeX และตั้งการเข้ารหัสตัวอักษรเป็น UTF-8 ซึ่งคอมเมนต์ทั้งสองบรรทัดนี้จริงๆ แล้วไม่ได้ถือว่าจำเป็นต้องใส่ครับ

```
\documentclass[11pt, a4paper]{report}
```

เป็นการบอกว่าให้เอกสารนี้ใช้คลาสที่ชื่อว่า `report` ซึ่งเป็นคลาสสำหรับการทำรายงานที่มีอยู่แล้วใน LaTeX แล้วตั้งค่าขนาดตัวอักษรตั้งต้น (base font size) ไว้ที่ 11pt และตั้งขนาดกระดาษเป็น A4

คลาสของ LaTeX นั้นเปรียบเสมือนเป็นเทมเพลตของเอกสาร แต่ละมหาวิทยาลัยหรือวารสารต่างๆ อาจมีคลาส LaTeX ของตัวเอง เพื่อกำหนดแนวทางหน้าตารูปแบบของเอกสารให้เป็นไปในทางเดียวกัน

```
\title{My First \LaTeX Document}\author{John Doe}
```

คำสั่ง `title` ใช้ในการตั้งชื่อเอกสาร และคำสั่ง `author` ใช้ตั้งชื่อผู้เขียน ว่าแต่ `\LaTeX` คืออะไร มันคือคำสั่งพิเศษจะแสดงโลโก้ของ LaTeX นั่นเอง

```
\begin{document}
\maketitle

Hello World

\end{document}
```

ตอนนี้เราก็เข้าสู่ “Environment” ที่ชื่อ `document` กันแล้ว ซึ่งก็คือส่วนของเนื้อหาในเอกสาร **เนื้อหาต่างๆ จะต้องอยู่ใน environment นี้** คำสั่งแรกคือ `maketitle` เป็นคำสั่งของคลาส `report` ที่เราใช้ คำสั่งนี้จะสร้างหน้าปกของเอกสารออกมา ส่วนข้อความว่า Hello World ด้านล่างก็คือเนื้อหาต่อจากหน้าปก จากนั้นเราก็ปิด environment `document` ด้วยคำสั่ง `end`

> 💡 **ข้อสังเกต** คำสั่งบางคำสั่งใน LaTeX จะเป็นคำสั่งสั้นๆ เช่น `\title{}` แต่บางคำสั่งจะมีลักษณะเป็น environment เช่น `document` จึงเปิดด้วย `\begin{document}` และปิดด้วย `\end{document}` ดังนั้นต้องตรวจสอบให้ดีว่าได้เปิดและปิดคำสั่งนั้นแล้วหรือยัง

# มาคอมไพล์กัน

ได้เวลามาลองคอมไพล์เอกสารของเรากันแล้ว ในบทความนี้ขอเสนอวิธีการคอมไพล์สองวิธี นั่นคือคอมไพล์ด้วย CLI (พิมพ์คำสั่ง) และ GUI (เป็นหน้าตาโปรแกรม) ครับ

# CLI

วิธีนี้อาจจะดูน่ากลัวสำหรับคนที่ไม่คุ้นเคยกับ Command Line Interface นะครับ แต่ถ้าอยากลองก็ทำตามไปได้ วิธีการก็ไม่ได้ยาก เพียงแค่เปิด Terminal หรือ Command Prompt เพื่อ `cd` เข้าไปในไดเรกทอรีของไฟล์เอกสารเรา แล้วรันคำสั่ง `miktex-xelatex` ตามด้วยชื่อไฟล์ LaTeX ของเรา เช่น

```
miktex-xelatex latex-tut-01.tex
```

XeLaTeX จะใช้เวลาพริบตาเดียวในการคอมไพล์เอกสาร LaTeX ของเราให้กลายเป็นไฟล์ PDF ที่มีชื่อไฟล์เหมือนกับไฟล์ LaTeX อย่างเช่นในตัวอย่างนี้เราจะได้ไฟล์ _latex-tut-01.pdf_ ออกมา อยู่ในไดเรกทอรีเดียวกัน

# GUI

สำหรับวิธีแบบ Graphical User Interface ก็แนะนำเป็นโปรแกรม TeXworks ครับ ใครใช้งานใน Windows ก็จะมีโปรแกรมนี้ติดมาด้วยตอนลง MiKTeX ส่วนใครที่ใช้ macOS ต้องไปดาวน์โหลดแยกนะครับ

การใช้งานไม่ได้ซับซ้อนเลย แค่คลิกเมนู _Open_ เพื่อเปิดไฟล์ LaTeX ของเรา จากนั้นกดปุ่ม _Typeset_ เป็นปุ่มสามเหลี่ยมสีเขียว (อย่าลืมเลือกเอนจิ้นเป็น XeLaTeX)

XeLaTeX จะทำงาน แล้วเมื่อคอมไพล์เสร็จก็จะได้ไฟล์ PDF ที่มีชื่อไฟล์เหมือนกับไฟล์ LaTeX อีกทั้งโปรแกรม TeXworks ก็ยังแสดงไฟล์ PDF นั้นออกมาในหน้าต่างข้างๆ ให้ด้วย

# การปรับรูปแบบตัวอักษร

สิ่งสำคัญอย่างหนึ่งในการทำเอกสารคือการปรับรูปแบบตัวอักษร (formatting) เช่น ตัวหนา ตัวเอียง

```
Hello World\textbf{Hello World} %% ย่อมาจาก 'B'old 'F'ace\textit{Hello World} %% ย่อมาจาก 'IT'alic\textbf{\textit{Hello World}}
```

<figure>

![](./images/1_KfuXhM9Mji0wxTw8wasBmg.webp)
<figcaption>
ภาพ 6: การปรับรูปแบบตัวอักษร
</figcaption>
</figure>

ว่าแต่ได้สังเกตไหมครับว่าแม้เราจะกด Enter เพื่อให้โค้ดเราขึ้นบรรทัดใหม่แล้ว แต่ผลลัพธ์ที่ได้ตอนคอมไพล์ไม่ได้ขึ้นบรรทัดใหม่ให้เราเลย กลายเป็นบรรทัดเดียวกัน นั่นเป็นเพราะเรา Enter ขึ้นบรรทัดใหม่เพื่อให้อ่านง่ายเฉยๆ (โดยปกติแล้วมักไม่ให้โค้ดแต่ละบรรทัดเกิน 66 ตัวอักษร) แต่ถ้าเราต้องการบังคับให้ผลลัพธ์ขึ้นบรรทัดใหม่ด้วย ให้ใช้เครื่องหมาย `\\`กำหนด เช่น

```
Hello World \\\textbf{Hello World} \\\textit{Hello World} \\\textbf{\textit{Hello World}}
```

<figure>

![](./images/1_17eIANwrT4Qkr12RO19ijQ.webp)
<figcaption>
ภาพ 7: การขึ้นบรรทัดใหม่
</figcaption>
</figure>

จะเห็นว่าข้อความของเราขึ้นบรรทัดใหม่ด้านหลังเครื่องหมาย `\\` เราใส่ไปแล้ว แต่สิ่งหนึ่งที่สังเกตได้คือใยบรรทัดแรก ข้อความ Hello World ของเราถูกขยับย่อหน้าเข้าไปซะงั้น เราสามารถตั้งให้ย่อหน้านี้ไม่ต้องถูกดันเข้าไปได้ด้วยคำสั่ง `noindent`

```
\noindent Hello World \\\textbf{Hello World} \\\textit{Hello World} \\\textbf{\textit{Hello World}}
```

<figure>

![](./images/1_J4z3wYPLTL-mEsKy7akYog.webp)
<figcaption>
ภาพ 8: การลบช่องว่างหน้าย่อหน้า
</figcaption>
</figure>

ตัวอย่างด้านบนที่เราพิมพ์มานี้ แม้ว่าจะขึ้นบรรทัดใหม่แล้วก็ยังเป็นย่อหน้า (paragraph) เดียวกันอยู่ ซึ่งการขึ้นย่อหน้าใหม่ใน LaTeX สามารถทำได้ด้วยการกด Enter สองครั้งครับ เช่น

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
```

<figure>

![](./images/1_FGkViKWSNbBvrpUnULWEjw.webp)
<figcaption>
ภาพ 9: การขึ้นย่อหน้าใหม่
</figcaption>
</figure>

การทำลิสต์ มีทั้งแบบตัวเลขและแบบจุด

```
\begin{enumerate}
  \item Apple
  \item Banana
  \item Cherry
\end{enumerate}

\begin{itemize}
  \item Apple
  \item Banana
  \item Cherry
\end{itemize}
```

![](./images/1_4xXZZUQPcuF57dY0vg_27A.webp)

![](./images/1_y7Z5tUeo9zak35my99ppVw.webp)

# แบ่งเนื้อหาเป็นส่วนๆ

_ดูตัวอย่างได้ใน_ [_Github_](https://github.com/DobaKung/latex-tutorial/tree/master/tut-02)

อีกหนึ่งสิ่งสำคัญของการทำรายงานก็คือการจัดระเบียบของข้อมูลด้วยการใส่หัวข้อใหญ่ หัวข้อย่อย LaTeX เองก็รองรับการทำหัวข้อในแบบ `chapter`, `section`, `subsection` และ `subsubsection` แต่ว่าคลาสแต่ละคลาสก็อาจรองรับต่างกันไป

```
\chapter{Project Details}

\section{Target Users}

\subsection{Direct users}

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

\subsection{Indirect users}

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

\section{Limitations}

\subsection{Technical}

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

<figure>

![](./images/1_wiwc7ViSEdFv7x3MiQpR_Q.webp)
<figcaption>
ภาพ 11: การแบ่ง chapter และ section
</figcaption>
</figure>

ปัญหาหนึ่งที่จะเจอเมื่อเอกสารมีเนื้อหาเพิ่มขึ้นเรื่อยๆ คือ การเอาเนื้อหาทุกบทมารวมกันในไฟล์เดียวคงทำให้จัดการไม่สะดวก ดังนั้นเราควรแบ่งเนื้อหาออกเป็นส่วนๆ ในไฟล์แยกกัน เช่น chapter-01.tex, chapter-02.tex เป็นต้น แล้วนำเข้ามาในไฟล์หลักด้วยคำสั่ง includeแล้วเรียกด้วยชื่อไฟล์ โดยไม่ต้องใส่นามสกุล .tex

```
% ... preamble here

\begin{document}
\maketitle

\include{chapter-01}
\include{chapter-02}

\end{document}
```

# ลองใช้แพ็คเกจ

เราจะมาเพิ่มแพ็คเกจแรกเข้าไปในไฟล์ LaTeX ของเรากันครับ ยังจำได้ไหมว่าต้องเพิ่มเข้าไปในส่วนไหน? เราต้องเพิ่มเข้าไปในส่วน preamble ของเอกสาร

```
\usepackage{graphicx}\graphicspath{ {./images/} }
```

เราใช้คำสั่ง `usepackage`ในการเรียกแพ็คเกจ `graphicx`เข้ามาใช้ เป็นแพ็คเกจสำหรับใส่ภาพในเอกสาร จากนั้นใช้คำสั่ง `graphicspath`ในการบอกว่าเราเก็บภาพไว้ที่โฟลเดอร์ `images`ที่อยู่ในไดเรกทอรีเดียวกับไฟล์ LaTeX ไฟล์หลักที่ใช้คอมไพล์ ซึ่งก็คือไฟล์นี้

```
\begin{figure}[h]  \centering  \includegraphics[width=10cm]{cat}  \caption{Photo by Manja Vitolic on Unsplash}\end{figure}
```

ต่อมาเราใช้ environment ที่ชื่อ `figure`ในการใส่ภาพ, ใช้คำสั่ง `centering`ในการจัดวัตถุใน environment นี้ให้อยู่ตรงกลางในแนวนอน, ใช้คำสั่ง `includegraphics`ในการดึงภาพเข้ามา โดยตั้งความกว้างที่ 10cm และไปเลือกไฟล์ที่ชื่อ _cat_(ไม่จำเป็นต้องใส่นามสกุลไฟล์) และใช้คำสั่ง `caption`ในการใส่คำบรรยายภาพ

<figure>

![](./images/1__sAziCGg1zqnODZvB_-oYA.webp)
<figcaption>
ภาพ 12: การใช้แพ็คเกจ graphicx แทรกภาพ
</figcaption>
</figure>

```
% !TEX TS-program = xelatex
% !TEX encoding = UTF-8

\documentclass[11pt, a4paper]{report}

\usepackage{graphicx}
\graphicspath{ {./images/} }

\title{My First \LaTeX Document}
\author{John Doe}

\begin{document}
\maketitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

\begin{figure}[h]
	\centering
	\includegraphics[width=10cm]{cat}
	\caption{Photo by Manja Vitolic on Unsplash}
\end{figure}

\end{document}
```

# การใช้ภาษาไทย

กว่าจะมาถึงตรงนี้อาจจะมีคนซน ลองพิมพ์ภาษาไทยไปก่อนแล้ว แล้วก็พบว่าไม่มีตัวอักษรขึ้นมา นั่นเป็นเพราะว่าฟอนต์ตั้งต้นของ LaTeX คือ Computer Modern ซึ่งไม่มีอักษรไทย ดังนั้นเราต้องเปลี่ยนไปใช้ฟอนต์ที่มีภาษาไทย อย่างเช่น Thonburi บน macOS หรือ Leelawadee บน Windows หรือ Garuda บน Linux

ให้เพิ่มคำสั่งด้านนี้เข้าไปในส่วน preamble ครับ

```
\usepackage{fontspec}\setmainfont[Script=Thai]{Tahoma}
```

คำสั่งนี้จะดึงแพ็คเกจ `fontspec`เข้ามา ซึ่งเป็นแพ็คเกจจัดการเกี่ยวกับฟอนต์ จากนั้นเราก็เรียกคำสั่ง `setmainfont`เพื่อกำหนดฟอนต์หลักของเอกสาร ให้เป็นฟอนต์ Tahoma โดยมีสคริปต์เป็นภาษาไทย เพื่อป้องกันวรรณยุกต์ลอยหรือหลุดความสูงบรรทัด เป็นต้น

<figure>

![](./images/1_Zedm1gRC-EbFUej_JUe1hA.webp)
<figcaption>
ภาพ 13: แสดงข้อความภาษาไทย
</figcaption>
</figure>

ทีนี้เราก็ได้ข้อความภาษาไทยออกมาแล้ว แต่เห็นไหมครับว่าย่อหน้านี้มันดูหนักไปทางขวา เกินระยะขอบ 1.5 นิ้วที่เป็นค่าตั้งต้นของคลาสนี้ นั่นเป็นเพราะ LaTeX ยังไม่รู้ว่าจะตัดคำภาษาไทยอย่างไร ให้เพิ่มคำสั่งนี้ไปในส่วน preamble ครับ

```
\XeTeXlinebreaklocale "th_TH"
```

<figure>

![](./images/1_tVoumSFpFL6QEyaDKtA8RA.webp)
<figcaption>
ภาพ 14: เพิ่มการตัดคำของ XeTeX
</figcaption>
</figure>

ทีนี้ LaTeX ก็สามารถตัดคำภาษาไทยได้แล้ว แต่ยังไม่ได้เป๊ะมาก เรายังสามารถปรับปรุงการกระจายช่องไฟระหว่างตัวอักษรได้อีก ผ่านแพ็คเกจ `babel`

```
\usepackage{babel}\babelprovide[main, import]{thai}
```

<figure>

![](./images/1_b9Z9bfqKOtSQZB926vJCTQ.webp)
<figcaption>
ภาพ 15: เพิ่มการตัดคำของ Babel
</figcaption>
</figure>

```
% !TEX TS-program = xelatex
% !TEX encoding = UTF-8

\documentclass[11pt, a4paper]{report}
\XeTeXlinebreaklocale "th_TH"

\usepackage{babel}
\babelprovide[main, import]{thai}

\usepackage{fontspec}
\setmainfont[Script=Thai]{Tahoma}

\title{รถประจำทางสาย 8}
\author{จอห์น โด}

\begin{document}
\maketitle

ข้อมูลจากวิกิพีเดีย: รถโดยสารประจำทางสาย 8 เป็นรถโดยสารประจำทางในกรุงเทพมหานคร
วิ่งจากตลาดแฮปปี้แลนด์ไปยังสะพานพุทธ ได้รับอนุมัติเดินรถตั้งแต่วันที่
1 ตุลาคม พ.ศ. 2475

\end{document}
```

# สรุป

หวังบทความนี้น่าจะช่วยให้หลายๆ คนได้เริ่มเขียน LaTeX เป็นกันบ้าง ด้วยสิ่งที่พื้นฐานมากๆ แต่ถ้าใครอยากลองใช้งานความสามารถอื่นๆ เพิ่มเติมสามารถค้นหาในอินเทอร์เน็ตได้ตามสะดวก เช่น การใส่ตาราง การอ้างอิง การตั้งค่ากระดาษ หรือการใช้แพ็คเกจต่างๆ ด้วยคีย์เวิร์ดเช่น “latex table”, “latex citation”, “latex paper margin” หรือ “latex geometry package” เป็นต้น

สิ่งสำคัญที่จะทำให้เข้าใจ LaTeX มากขึ้นคือต้องลองเขียน ลองปรับค่าต่างๆ ลองนู่นลองนี่ด้วยตนเอง ก็จะเข้าใจการทำงานของ LaTeX มากขึ้นครับ

หากเขียนไม่เข้าใจ มีข้อผิดพลาดหรือคำแนะนำจุดใด ก็คอมเมนต์ไว้ได้เลยนะครับ ส่วนบทความหน้า (ถ้าไม่ขี้เกียจ) ก็จะเอาวิธีทำบรรณานุกรมมาฝากกันครับ สวัสดีครับ

**แหล่งข้อมูล**

- [https://en.wikipedia.org/wiki/LaTeX](https://en.wikipedia.org/wiki/LaTeX)

- [http://www.tug.org/levels.html](http://www.tug.org/levels.html)

- [https://www.overleaf.com/learn](https://www.overleaf.com/learn)

- [https://en.wikibooks.org/wiki/LaTeX](https://en.wikibooks.org/wiki/LaTeX)
