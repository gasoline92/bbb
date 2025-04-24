from tkinter import *
import time
root = Tk()
c =Canvas(root, width=400, height=500)
c.pack()
b = Entry(root)
#root().title("Расчет времени окупаемости")

widget1 = Label(root, text="Кол-во:") 
c.create_window(90, 20, window=widget1) 
entry1 = Entry(root)
c.create_window(90,40,window=entry1)

widget2 = Label(root, text="Изн-ная мощьность(Вт):") 
c.create_window(90, 60, window=widget2) 
entry2 = Entry(root)
c.create_window(90,80,window=entry2)

widget3 = Label(root, text="Кон-ная мощьность(Вт):") 
c.create_window(90, 100, window=widget3) 
entry3 = Entry(root)
c.create_window(90,120,window=entry3)

widget4 = Label(root, text="Время работы в год (ч):") 
c.create_window(90, 140, window=widget4) 
entry4 = Entry(root)
c.create_window(90,160,window=entry4)

widget5 = Label(root, text="Тариф (руб):") 
c.create_window(90, 180, window=widget5) 
entry5 = Entry(root)
c.create_window(90,200,window=entry5)

widget6 = Label(root, text="Старая цена:") 
c.create_window(90, 220, window=widget6) 
entry6 = Entry(root)
c.create_window(90,240,window=entry6)

widget7 = Label(root, text="Новая цена:") 
c.create_window(90, 260, window=widget7) 
entry7 = Entry(root)
c.create_window(90,280,window=entry7)

widget8 = Label(root, text="Срок службы старой:") 
c.create_window(90, 300, window=widget8) 
entry8 = Entry(root)
c.create_window(90,320,window=entry8)

widget9 = Label(root, text="Срок службы новой:") 
c.create_window(90, 340, window=widget9) 
entry9= Entry(root)
c.create_window(90,360,window=entry9)

def cal():
    try:
        N = int(entry1.get())
        P1 = int(entry2.get())
        P2 = int(entry3.get())
        t = int(entry4.get())
        tar = int(entry5.get())
        c1 = int(entry6.get())
        c2 = int(entry7.get())
        T1 = int(entry8.get())
        T2 = int(entry9.get())
    except:
        print("неверный формат ввода")
    Ekon_g = N * ((P1 - P2)/1000) * t * tar
    # Срок окупаемости:
    sr_o = (N *(c2 - c1)) * Ekon_g
    # Общая экономия за срок службы:
    Ekon_o = (Ekon_g * T2) + (N * (((T1 * c1) / T1) - c2))
    s_o = sr_o / Ekon_g
    res = s_o / Ekon_g
    res_k = res * 12
    lab = Label(root,text = f"Срок окупаемости: {res_k:.2f} (мес) ")
    c.create_window(250,240,window=lab)
but = Button(text='Расчетать', command=cal) 
c.create_window(270, 200, window=but) 
root.mainloop()  