const QUESTIONS = [
  {
    id: 1,
    type: 'choice',
    question: `有如下程序： 
#include<iostream> 
using namespace std; 
class Sample { 
public: 
    Sample() { } 
    ~Sample() {cout<<"*";} 
}; 
int main() { 
    Sample temp[2], *pTemp[2]; 
    return 0; 
} 
执行这个程序后，输出星号“*”的个数为（ ）。`,
    options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 2,
    type: 'choice',
    question: `有如下程序： 
#include<iostream> 
using namespace std; 
class DA { 
    int k; 
public: 
    DA(int x=1): k(x) { } 
    ~DA() { cout<<k;} 
}; 
int main() { 
    DA d[]={DA(3),DA(3),DA(3) }; 
    DA *p=new DA[2]; 
    delete []p; 
    return 0; 
} 
程序执行后，输出结果为（ ）。`,
    options: ['A. 11', 'B. 2333', 'C. 333', 'D. 11333'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 3,
    type: 'choice',
    question: `有如下程序： 
#include<iostream> 
using namespace std; 
class myClass { 
public: 
    myClass() { number++; } 
    ~myClass() { number--; } 
    static int number; 
}; 
int myClass::number=0; 
int main() { 
    myClass *ptr; 
    myClass A,B; 
    myClass *ptr_Arr = new myClass[3]; 
    ptr = ptr_Arr; 
    myClass C; 
    cout << myClass::number << endl; 
    delete []ptr; 
    return 0; 
} 
程序执行后，输出结果为（ ）。`,
    options: ['A. 3', 'B. 4', 'C. 6', 'D. 7'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 4,
    type: 'choice',
    question: `假定 AB 为一个类，px 为指向该类的一个含有 n 个对象的动态数组的指针，则执行语句 delete ［］px; 时，共调用该类析构函数的次数为（ ）。`,
    options: ['A. 0', 'B. 1', 'C. n', 'D. n+1'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 5,
    type: 'choice',
    question: `有类定义如下： 
class MyClass { 
public: 
    MyClass() { cout<<1; } 
}; 
执行语句 MyClass a, b[2], *p[2]; 后，程序的输出结果是（ ）。`,
    options: ['A. 11', 'B. 111', 'C. 1111', 'D. 11111'],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 6,
    type: 'choice',
    question: `设有 Point 类定义如下： 
class Point { 
    int x，y； 
public： 
    Point(int x1=0，int y1=0)：x(x1)，y(y1){} 
}; 
执行语句 Point a(2)，b[3]，*c[4]; 时，Point 类的构造函数被调用的次数是（ ）。`,
    options: ['A. 2', 'B. 3', 'C. 4', 'D. 8'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 7,
    type: 'choice',
    question: `Sample 是一个类，执行语句 Sample a[2], *p= new Sample; 后，调用 Sample 类的构造函数的次数是（ ）。`,
    options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 8,
    type: 'choice',
    question: `有如下头文件： 
int fl(); 
static int f2(); 
class MA { 
public:
    int f3(); 
    static int f4(); 
}; 
在所描述的函数中，具有隐含的 this 指针的是（ ）。`,
    options: ['A. f1', 'B. f2', 'C. f3', 'D. f4'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 9,
    type: 'choice',
    question: `有如下程序： 
#include<iostream> 
using namespace std; 
class Fun { 
public: 
    static int i; 
    Fun() {i++;} 
    int value() { return i-1; } 
    int value() const { return i+1; } 
}; 
int Fun::i=2; 
int main() { 
    Fun fun1; 
    const Fun fun2; 
    cout << fun1.value() << fun2.value() << Fun::i << endl; 
    return 0; 
} 
程序执行后，输出结果为（ ）。`,
    options: ['A. 112', 'B. 132', 'C. 334', 'D. 354'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 10,
    type: 'choice',
    question: `由于常对象不能被更新，因此（ ）。`,
    options: [
      'A. 通过常对象只能调用它的常成员函数',
      'B. 通过常对象只能调用静态成员函数',
      'C. 常对象的成员都是常成员',
      'D. 通过常对象可以调用任何不改变对象值的成员函数'
    ],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 11,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
int main()
{
  int x = 10;
  int& ref = x;
  ref = 20;
  cout << "x = " << x << endl ;
  x = 30;
  cout << "ref = " << ref << endl;
  return 0;
}`,
    options: [
      'A. x = 20\nref = 30',
      'B. x = 20\nref = 20',
      'C. x = 10\nref = 30',
      'D. x = 30\nref = 30'
    ],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 12,
    type: 'choice',
    question: `请写出以下程序的运行结果：
main() {}`,
    options: ['A. 没有输出', 'B. 随机结果', 'C. 编译错误', 'D. 运行时错误'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 13,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
#include<string.h>
using namespace std;
int main() {
    cout<<strcmp("strcmp()","strcmp()");
    return 0;
}`,
    options: ['A. 0', 'B. 1', 'C. -1', 'D. strcmp()函数报错'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 14,
    type: 'choice',
    question: 'C++中继承的主要目的是什么？',
    options: [
      'A. 扩展类的功能',
      'B. 促进代码的可重用性',
      'C. 促进数据类型的转换',
      'D. 帮助模块化编程'
    ],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 15,
    type: 'choice',
    question: '在C++中，函数（functions）也被称为什么？',
    options: [
      'A. Definitions（定义）',
      'B. Concepts（概念）',
      'C. Methods（方法）',
      'D. Organizers（组织者）'
    ],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 16,
    type: 'choice',
    question: '构造函数可以返回哪种类型的值？',
    options: ['A. int', 'B. float', 'C. void', 'D. 以上都不是'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 17,
    type: 'choice',
    question: '在C++中，哪个关键字用于保持按引用传递的值不变？',
    options: ['A. const', 'B. static', 'C. absolute', 'D. 以上都不是'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 18,
    type: 'choice',
    question: 'C++中有多少种返回值的类型？',
    options: ['A. 3', 'B. 2', 'C. 1', 'D. 以上都不是'],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 19,
    type: 'choice',
    question: '在C++程序中，类的成员（fields）默认的访问权限是什么？',
    options: ['A. public', 'B. protected', 'C. private', 'D. 以上都不是'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 20,
    type: 'choice',
    question: '选出对象的另一种定义',
    options: [
      'A. attribute of the class（类的属性）',
      'B. member of the class（类的成员）',
      'C. associate of the class（类的关联）',
      'D. instance of the class（类的实例）'
    ],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 21,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class Base
{
public :
  int x, y;
public:
  Base(int i, int j){ x = i; y = j; }
};
class Derived : public Base
{
public:
  Derived(int i, int j):x(i), y(j) {}
  void print() {cout << x <<" "<< y; }
};
int main(void)
{
  Derived q(10, 10);
  q.print();
  return 0;
}`,
    options: ['A. 10 10', 'B. 0 0', 'C. 编译错误', 'D. 运行时错误'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 22,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class Base1 {
public:
  Base1(){cout << " Base1's constructor called" << endl;}
};
class Base2 {
public:
  Base2(){ cout << "Base2's constructor called" << endl;  }
};
class Derived: public Base1, public Base2 {
public:
  Derived(){cout<< "Derived's constructor called" << endl;}
};
int main()
{
  Derived d;
  return 0;
}`,
    options: [
      'A. Base1′s constructor called\nBase2′s constructor called\nDerived’s constructor called',
      'B. Base2′s constructor called\nBase1′s constructor called\nDerived’s constructor called',
      'C. 编译错误',
      'D. 运行时'
    ],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 23,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class A {
public:
  int a;
  A(int x) : a(x) {}
  int& fun() { return a; }
};
int main()
{
  A a(10);
  a.fun() = 30;
  cout << a.fun() << endl;
  return 0;
}`,
    options: ['A. Compiler Error', 'B. 10', 'C. 30', 'D. Run time Error'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 24,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include <iostream>
using namespace std;
int i;
class A {
public:
  ~A(){ i=10; }
};
int foo() {
  i=3;
  A ob;
  return i;
}
int main() {
  cout << foo() << endl;
  return 0;
}`,
    options: ['A. 0', 'B. 3', 'C. 10', 'D. 以上都不对'],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 25,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include <iostream>
using namespace std;
int i;
class A {
public:
  ~A(){ i=10; }
};
int foo() {
  i=3;
  {
    A ob;
  }
  return i;
}
int main() {
cout << foo() << endl;
return 0;
}`,
    options: ['A. 0', 'B. 3', 'C. 10', 'D. 以上都不对'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 26,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class P {
public:
  void print()  { cout <<" Inside P"; }
};
class Q : public P {
public:
  void print() { cout <<" Inside Q"; }
};
class R: public Q { };
int main(void)
{
  R r;
  r.print();
  return 0;
}`,
    options: ['A. Inside P', 'B. Inside Q', 'C. 编译错误', 'D. 运行时错误'],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 27,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class Base {
public:
  void fun()      {  out << "Base::fun() called";     }
  void fun(int i) {  cout << "Base::fun(int i) called";  }
};
class Derived: public Base  {
public:
  void fun()   {  out << "Derived::fun() called";   }
};
int main()  {
  Derived d;
  d.fun(5);
  return 0;
}`,
    options: ['A. Base::fun(int i) called', 'B. Derived::fun() called', 'C. Base::fun() called', 'D. 编译错误'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 28,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class Test {
private:
  int x;
public:
  Test(int x = 0) { this->x = x; }
  void change(Test *t) { this = t; }
  void print() { cout << "x = " << x << endl; }
};
int main() {
  Test obj(5);
  Test *ptr = new Test (10);
  obj.change(ptr);
  obj.print();
  return 0;
}`,
    options: ['A. x = 5', 'B. x = 10', 'C. Compiler Error', 'D. Runtime Error'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 29,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class Test
{
private:
  int x;
  int y;
public:
  Test(int x = 0, int y = 0) { this->x = x; this->y = y; }
  static void fun1() { cout << "Inside fun1()"; }
  static void fun2() { cout << "Inside fun2()"; this->fun1(); }
};
int main()
{
  Test obj;
  obj.fun2();
  return 0;
}`,
    options: ['A. Inside fun2() Inside fun1()', 'B. Inside fun2()', 'C. Inside fun1() Inside fun2()', 'D. Compiler Error'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 30,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class Point {
public:
  Point() { cout << "Normal Constructor calledn"; }
  Point(const Point &t){cout<<"Copy constructor calledn"; }
};
int main()
{
  Point *t1, *t2;
  t1 = new Point();
  t2 = new Point(*t1);
  Point t3 = *t1;
  Point t4;
  t4 = t3;
  return 0;
}`,
    options: [
      'A. Normal Constructor called\nNormal Constructor called\nNormal Constructor called\nCopy Constructor called',
      'B. Copy Constructor called\nNormal Constructor called\nCopy Constructor called',
      'C. Normal Constructor called\nCopy Constructor called\nCopy Constructor called\nNormal Constructor called',
      'D. Normal Constructor called\nCopy Constructor called\nCopy Constructor called\nNormal Constructor called\nCopy Constructor called'
    ],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 31,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include <iostream>
using namespace std;
class Test {
private:
    int x;
public:
    Test(int i) : x(i) { cout << "constructor called, x = " << x << endl;}
};

int main() {
    Test t(20);
    t = 30; // conversion constructor is called here.
    return 0;
}`,
    options: ['A. Compiler Error', 'B. constructor called, x = 20', 'C. constructor called, x = 20\nconstructor called, x = 30', 'D. 以上都不对'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 32,
    type: 'choice',
    question: `假设整形数占4个字节内存，请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class base {
  int arr[10];
};
class b1: public base { };
class b2: public base { };
class derived: public b1, public b2 {};
int main(void)
{
  cout << sizeof(derived);
  return 0;
}`,
    options: ['A. 40', 'B. 80', 'C. 0', 'D. 4'],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 33,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include<iostream>
using namespace std;
class Test {
  static int x;
  int *ptr;
  int y;
};
int main() {
  Test t;
  cout << sizeof(t) << " ";
  cout << sizeof(Test *);
}`,
    options: ['A. 8 4', 'B. 8 8', 'C. 12 4', 'D. 12 12'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 34,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include <iostream>
using namespace std;
class Base { // 声明类 Base
public:
  Base() { cout << "1"; }
  Base(const Base& obj) { cout << "2"; }
};
class B1 : virtual public Base { // 声明 Base 类的直接派生类 B1
public:
  B1() { cout << "3"; }
  B1(const B1& obj) { cout << "4"; }
};
class B2 : virtual public Base { // 声明 Base 类的直接派生类 B2
public:
  B2() { cout << "5"; }
  B2(const B2& obj) { cout << "6"; }
};
class Derived : public B1, public B2 { // 声明 Base 类的间接派生类 Derived
public:
  Derived() { cout << "7"; }
  Derived(const Derived& obj)  { cout << "8"; }
};
int main() {
  Derived obj;
  Derived d(obj);
  return 0;
}`,
    options: ['A. 13571357', 'B. 13572468', 'C. 13571358', 'D. 13572358'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 35,
    type: 'choice',
    question: `请写出以下程序的运行结果：
#include <iostream>
using namespace std;
class Base { // 声明类 Base
public:
  Base() { cout << "1"; }
  Base(const Base& obj) { cout << "2"; }
};
class B1 : virtual public Base { // 声明 Base 类的直接派生类 B1
public:
  B1() { cout << "3"; }
  B1(const B1& obj) { cout << "4"; }
};
class B2 : virtual public Base { // 声明 Base 类的直接派生类 B2
public:
  B2() { cout << "5"; }
  B2(const B2& obj) { cout << "6"; }
};
class Derived : public B1, public B2 { // 声明 Base 类的间接派生类 Derived
public:
  Derived() { cout << "7"; }
  Derived(const Derived& obj) : Base(obj) { cout << "8"; }
};
int main() {
  Derived obj;
  Derived d(obj);
  return 0;
}`,
    options: ['A. 13571357', 'B. 13572468', 'C. 13571358', 'D. 13572358'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 36,
    type: 'choice',
    question: '下列对类的构造函数和析构函数的描述中，正确的是（ ）。',
    options: [
      'A. 构造函数可以重载，析构函数不能重载',
      'B. 构造函数可以重载，析构函数也可以重载',
      'C. 构造函数不能重载，析构函数可以重载',
      'D. 构造函数不能重载，析构函数也不能重载'
    ],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 37,
    type: 'choice',
    question: `有如下类定义： 
class A { 
    char *a; 
public: 
    A():a(0){} 
    A(char *aa) { 
        // 把 aa 所指字符串拷贝到 a 所指向的存储空间 
        a=_______________________; 
        strcpy(a,aa); 
    } 
    ~A() { delete []a; } 
}; 
横线处应填写的表达式是（ ）。`,
    options: ['A. char[strlen(aa)]', 'B. char[strlen(aa)+1]', 'C. new char[sizeof(aa)-1]', 'D. new char[strlen(aa)+1]'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 38,
    type: 'choice',
    question: '下列关于析构函数的叙述中，不正确的是（ ）。',
    options: [
      'A. 一个类只有一个析构函数',
      'B. 析构函数可以有形参',
      'C. 析构函数没有任何函数类型',
      'D. 析构函数的作用是在对象被撤销时收回先前分配的内存空间'
    ],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 39,
    type: 'choice',
    question: '如果某函数的返回值是一个对象，则该函数被调用时，返回的对象（ ）。',
    options: [
      'A. 用哪个构造函数初始化取决于函数中 return 语句是怎么写的',
      'B. 是通过无参数的构造函数初始化的',
      'C. 是通过复制构造函数初始化的',
      'D. 不需要初始化'
    ],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 40,
    type: 'choice',
    question: '关于C++中的虚函数，以下哪一项是正确的?',
    options: [
      'A. 虚函数是在派生类可以以相同函数名重写的函数。',
      'B. 虚拟函数可以在继承层次结构中实现运行时多态性。',
      'C. 如果函数在基类中是“虚”的，则根据所引用对象的实际类型调用派生类的函数实现，而不考虑指针或引用的声明类型。在非虚拟函数中，函数是根据引用或指针的类型来调用的。',
      'D. 以上都是'
    ],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 41,
    type: 'choice',
    question: `以下程序的输出结果：
#include<iostream> 
using namespace std; 
class Base { 
public: 
    virtual void show() { cout<<" In Base n"; } 
}; 
class Derived: public Base { 
public: 
    void show() { cout<<"In Derived n"; } 
}; 
int main(void) { 
    Base *bp = new Derived; 
    bp->show(); 
    Base &br = *bp; 
    br.show(); 
    return 0; 
}`,
    options: ['A. In Base In Base', 'B. In Base In Derived', 'C. In Derived In Derived', 'D. In Derived In Base'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 42,
    type: 'choice',
    question: `以下程序的输出结果：
#include<iostream> 
using namespace std; 
class Base { 
public:  
    virtual void show() { cout<<" In Base n"; } 
}; 
class Derived: public Base { 
public: 
    void show() { cout<<"In Derived n"; } 
}; 
int main(void) { 
    Base *bp, b; 
    Derived d; 
    bp = &d; 
    bp->show(); 
    bp = &b; 
    bp->show(); 
    return 0; 
}`,
    options: ['A. In Base In Base', 'B. In Base In Derived', 'C. In Derived In Derived', 'D. In Derived In Base'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 43,
    type: 'choice',
    question: `以下程序的输出结果：
#include<iostream> 
using namespace std; 
class Base { 
public: 
    virtual void show() = 0; 
}; 
int main(void) { 
    Base b; 
    Base *bp; 
    return 0; 
}`,
    options: [
      'A. 在行"Base b;" 和行"Base* bp;"存在编译错误',
      'B. 在行"Base b;" 存在编译错误',
      'C. 在行"Base* bp;"存在编译错误',
      'D. 没有编译错误'
    ],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 44,
    type: 'choice',
    question: `以下程序的输出结果：
#include<iostream> 
using namespace std; 
class Base { 
public: 
    virtual void show() = 0; 
}; 
class Derived : public Base { }; 
int main(void) { 
    Derived q; 
    return 0; 
}`,
    options: ['A. 编译错误：不能有空的派生类', 'B. 编译错误：派生类是抽象类，不能定义对象', 'C. 没有编译错误，运行时错误', 'D. 正常运行'],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 45,
    type: 'choice',
    question: `以下程序的输出结果：
#include<iostream> 
using namespace std; 
class Base { 
public: 
    virtual void show() = 0; 
}; 
class Derived: public Base { 
public: 
    void show() { cout<<"In Derived"; } 
}; 
int main(void) { 
    Derived d; 
    Base &br = d; 
    br.show(); 
    return 0; 
}`,
    options: ['A. 在行 "Base &br = d;"存在编译错误', 'B. 运行时错误', 'C. 空输出', 'D. In Derived'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 46,
    type: 'choice',
    question: `以下程序的输出结果：
#include <iostream> 
using namespace std; 
class Base { 
public: 
    virtual Base() {} 
}; 
int main() { 
    return 0; 
}`,
    options: ['A. 编译错误', 'B. 运行时错误', 'C. 空输出', 'D. 以上都不对'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 47,
    type: 'choice',
    question: `以下程序的输出结果：
#include <iostream> 
using namespace std; 
class Base { 
public: 
    virtual ~Base() {} 
}; 
int main() { 
    return 0; 
}`,
    options: ['A. 编译错误', 'B. 编译错误', 'C. 空输出', 'D. 以上都不对'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 48,
    type: 'choice',
    question: `以下程序的输出结果：
#include<iostream> 
using namespace std; 
class Base { 
public: 
    Base() { cout<<"Constructor: Base"<<endl; } 
    virtual ~Base() { cout<<"Destructor : Base"<<endl; } 
}; 
class Derived: public Base { 
public: 
    Derived() { cout<<"Constructor: Derived"<<endl; } 
    ~Derived() { cout<<"Destructor : Derived"<<endl; } 
}; 
int main() { 
    Base *Var = new Derived(); 
    delete Var; 
    return 0; 
}`,
    options: [
      'A. Constructor: Base\nConstructor: Derived\nDestructor : Derived\nDestructor : Base',
      'B. Constructor: Base\nConstructor: Derived\nDestructor : Base',
      'C. Constructor: Base\nConstructor: Derived\nDestructor : Derived',
      'D. Constructor: Derived\nDestructor : Derived'
    ],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 49,
    type: 'choice',
    question: `以下程序的输出结果：
#include <iostream> 
using namespace std; 
class Base { 
public: 
    virtual static void fun() { } 
}; 
int main() { 
    return 0; 
}`,
    options: ['A. 编译错误', 'B. 运行时错误', 'C. 空输出', 'D. 以上都不对'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 50,
    type: 'choice',
    question: `以下程序的输出结果：
#include <iostream> 
using namespace std; 
class A { 
public: 
    virtual void fun(); 
}; 
class B {  
public: 
    void fun(); 
}; 
int main() { 
    int a = sizeof(A), b = sizeof(B); 
    if (a == b) 
        cout << "a == b"; 
    else if (a > b) 
        cout << "a > b"; 
    else 
        cout << "a < b"; 
    return 0; 
}`,
    options: ['A. a < b', 'B. a == b', 'C. a > b', 'D. 编译错误'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 51,
    type: 'choice',
    question: `以下程序的输出结果：
#include <iostream> 
using namespace std; 
class A { 
public: 
    virtual void fun() { cout << "A::fun() "; } 
}; 
class B: public A { 
public: 
    void fun() { cout << "B::fun() "; } 
}; 
class C: public B { 
public: 
    void fun() { cout << "C::fun() "; } 
}; 
int main() { 
    B *bp = new C; 
    bp->fun(); 
    return 0; 
}`,
    options: ['A. A::fun()', 'B. B::fun()', 'C. C::fun()', 'D. None of the Above'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 52,
    type: 'choice',
    question: `以下程序的输出结果：
#include<iostream> 
using namespace std; 
class Base { 
public: 
    virtual void show() { cout<<" In Base n"; } 
}; 
class Derived: public Base { 
public: 
    void show() { cout<<"In Derived n"; } 
}; 
int main(void) {  
    Base *bp = new Derived; 
    bp->Base::show(); // Note the use of scope resolution here 
    return 0; 
}`,
    options: ['A. In Base', 'B. In Derived', 'C. Compiler Error', 'D. Runtime Error'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 53,
    type: 'choice',
    question: `以下程序的输出结果是？
#include <iostream>
using namespace std;
template <typename T>
void fun(const T&x)
{
  static int count = 0;
  cout << "x = " << x << " count = " << count << endl;
  ++count;
  return;
}
int main()
{
  fun<int> (1);
  cout << endl;
  fun<int>(1);
  cout << endl;
  fun<double>(1.1);
  cout << endl;
  return 0;
}`,
    options: [
      'A. x = 1 count = 0\nx = 1 count = 1\nx = 1.1 count = 0',
      'B. x = 1 count = 0\nx = 1 count = 0\nx = 1.1 count = 0',
      'C. x = 1 count = 0\nx = 1 count = 1\nx = 1.1 count = 2',
      'D. 编译错误'
    ],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 54,
    type: 'choice',
    question: `以下程序的输出结果是？
#include <iostream>
using namespace std;
template <typename T>
T max(T x, T y)
{
  return (x > y)? x : y;
}
int main()
{
  cout << max(3, 7) << std::endl;
  cout << max(3.0, 7.0) << std::endl;
  cout << max(3, 7.0) << std::endl;
  return 0;
}`,
    options: [
      'A. 7\n7,0(此处的,为小数点)\n7,0(此处的,为小数点)',
      'B. 所有cout语句都会发生编译错误',
      'C. 最后一个cout语句会发生编译错误',
      'D. 以上都不是'
    ],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 55,
    type: 'choice',
    question: `以下程序的输出结果是？
#include <iostream>
using namespace std;
template <class T>
class Test
{
private:
  T val;
public:
  static int count;
  Test()  {   count++;   }
};
template<class T>
int Test<T>::count = 0;
int main()
{
  Test<int> a;
  Test<int> b;
  Test<double> c;
  cout << Test<int>::count   << endl;
  cout << Test<double>::count << endl;
  return 0;
}`,
    options: ['A. 0\n0', 'B. 1\n1', 'C. 2\n1', 'D. 1\n0'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 56,
    type: 'choice',
    question: `以下程序的输出结果是？假设char占1个字节，int占4个字节，编译器没有做对齐。
#include<iostream>
#include<stdlib.h>
using namespace std;
template<class T, class U>
class A  {
  T x;
  U y;
  static int count;
};
int main()  {
  A<char, char> a;
  A<int, int> b;
  cout << sizeof(a) << endl;
  cout << sizeof(b) << endl;
  return 0;
}`,
    options: ['A. 6\n12', 'B. 2\n8', 'C. 8\n8', 'D. 编译错误'],
    answer: 'B',
    explanation: '无'
  },
  {
    id: 57,
    type: 'choice',
    question: `以下程序的输出结果是？假设int占4个字节，double占8个字节，编译器没有做对齐。
#include<iostream>
#include<stdlib.h>
using namespace std;
template<class T, class U, class V=double>
class A  {
  T x;
  U y;
  V z;
static int count;
};
int main()
{
  A<int, int> a;
  A<double, double> b;
  cout << sizeof(a) << endl;
  cout << sizeof(b) << endl;
  return 0;
}`,
    options: ['A. 16\n24', 'B. 8\n16', 'C. 20\n28', 'D. 编译错误'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 58,
    type: 'choice',
    question: `以下程序的输出结果是？
#include <iostream>
using namespace std;
template <class T, int max>
int arrMin(T arr[], int n)
{
  int m = max;
  for (int i = 0; i < n; i++)
    if (arr[i] < m)
      m = arr[i];
  return m;
}
int main()
{
  int arr1[]  = {10, 20, 15, 12};
  int n1 = sizeof(arr1)/sizeof(arr1[0]);
  char arr2[] = {1, 2, 3};
  int n2 = sizeof(arr2)/sizeof(arr2[0]);
  cout << arrMin<int, 10000>(arr1, n1) << endl;
  cout << arrMin<char, 256>(arr2, n2);
  return 0;
}`,
    options: ['A. 10\n1', 'B. 10000\n256', 'C. 1\n1', 'D. 编译错误'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 59,
    type: 'choice',
    question: `以下程序的输出结果是？
#include <iostream>
using namespace std;
template <int i>
void fun()
{
  i = 20;
  cout << i;
}
int main()
{
  fun<10>();
  return 0;
}`,
    options: ['A. 10', 'B. 20', 'C. 编译错误', 'D. 运行错误'],
    answer: 'C',
    explanation: '无'
  },
  {
    id: 60,
    type: 'choice',
    question: `以下程序的输出结果是？
#include <iostream>
using namespace std;
 
class Test 
{
  int x;
  Test() { x = 5;}
};
 
int main()
{
   Test *t = new Test;
   cout << t->x;
}`,
    options: ['A. 5', 'B. 0', 'C. 任意值', 'D. 编译错误'],
    answer: 'D',
    explanation: '无'
  },
  {
    id: 61,
    type: 'choice',
    question: `以下程序的输出结果是？
#include <iostream>
using namespace std;
class Complex
{
private:
  int real;
  int imag;
public:
  Complex(int r, int i) { real = r; imag = i; }
  Complex operator ++(int);
  Complex & operator ++();
  friend ostream& operator<<(ostream& os, Complex c);
};
Complex &Complex::operator ++()
{
  real++; imag++;
  return *this;
}
Complex Complex::operator ++(int i)
{
  Complex c1(real, imag);
  real++; imag++;
  return c1;
}
ostream& operator<<(ostream& os, Complex c)
{
  os << c.real << " + i" << c.imag;
  return os;
}
int main()
{
  Complex c1(10, 15), c2(10, 15);
  cout << ++c1 << endl;
  cout << c2++ << endl;
  return 0;
}`,
    options: ['A. 11 + i16\n10 + i15', 'B. 10 + i15\n11 + i16', 'C. 编译错误', 'D. 运行错误'],
    answer: 'A',
    explanation: '无'
  },
  {
    id: 62,
    type: 'choice',
    question: `以下程序的输出结果是（）
#include <iostream>  
using namespace std;  
class Test  {  
private:    
  int x;  
public:    
  Test(int i) {      x = i;      cout << "Called" << endl;    }  
};  
int main()  {    
  Test t(20);    
  t = 30; // conversion constructor is called here.    
  return 0;  
}`,
    options: ['A. Called', 'B. Called Called', 'C. 编译错误', 'D. 以上都不是'],
    answer: 'B',
    explanation: '无'
  },
  {
    id:63,
    type:'fill',
    question:`下面程序的输出结果是： 
5, 5 
5, 5 
请填空使程序完整。 
#include <iostream> 
using namespace std; 
class Base { 
public:  
    int k;  
    Base(int n) :k(n) {} 
}; 
class Big { 
public:  
    int v;  
    Base b;  
    Big(int n) : (1)_______________{} //（1）  
    Big(const Big& obj) : (2)______________{} //（2） 
}; 
int main() {  
    Big a1(5);  
    Big a2 = a1;  
    cout << a1.v << ", " << a1.b.k << endl;  
    cout << a2.v << ", " << a2.b.k << endl;  
    return 0; 
}`,
    answer:'v(n),b(n)#v(obj.v),b(obj.b)',
    explanation:'正确答案为:v(n),b(n)#v(obj.v),b(obj.b)'
  },
  {
    id:'64',
    type:'fill',
    question:`请写出下列程序的运行结果。 
#include <iostream> 
using namespace std; 
class ClassOne { 
public:  
    ClassOne() { i = 0; cout << "A"; }  
    ClassOne(int value) :i(value) { cout << "B"; }  
    ~ClassOne() { cout << "C"; }  
    void Print() { cout << i; } 
private:  
    int i; 
}; 
class ClassTwo { 
public:  
    ClassTwo() { i = 0; cout << "D"; }  
    ClassTwo(int value) :i(value) { cout << "E"; }  
    ~ClassTwo() { cout << "F"; }  
    void Print() { cout << i; } 
private:  
    ClassOne myobj;  
    int i; 
}; 
int main() {  
    ClassTwo myclass(5);  
    myclass.Print();  
    return 0;   
} `,
    answer:'AE5FC',
    explanation:'正确答案为：AE5FC',
  },
  {
    id:'65',
    type:'fill',
    question:`下面程序的输出结果是： 
10 
请补足 Sample 类的成员函数。注意：不能增加数据成员。 
#include <iostream> 
using namespace std; 
class Sample { 
public:  
    int v;  
    Sample(int n) :v(n) {}  
    // 请在此处定义 Sample 类的成员函数 
}; 
int main() {  
    Sample a(5);  
    Sample b = a;  
    cout << b.v;  
    return 0; 
}`,
    answer:'Sample(const Sample& s) : v(s.v * 2) {}',
    explanation:'正确答案为：Sample(const Sample& s) : v(s.v * 2) {}',
  },
  {
    id:'66',
    type:'fill',
    question:`请写出下列程序的运行结果。 
#include <iostream> 
using namespace std; 
class Sample { 
public:  
    int v;  
    Sample() { }  
    Sample(int n) :v(n) {}  
    Sample(const Sample& x) {  v = 2 + x.v;  } 
}; 
Sample printAndDouble(Sample obj) {  
    cout << obj.v;  
    obj.v = 2 * obj.v;  
    return obj; 
} 
int main() {  
    Sample a(5);  
    Sample b = a;  
    Sample c = printAndDouble(b);  
    cout << endl;  
    cout << c.v << endl;  
    Sample d;  d = a;  
    cout << d.v;  
    return 0; 
}`,
    answer:'9\n22\n5',
    explanation:'正确答案为：9\n22\n5',
  },
  {
    id:'67',
    type:'fill',
    question:`请写出下列程序的运行结果。 
#include <iostream> 
using namespace std; 
class B { 
public:  
    B() { cout << "default constructor" << endl; }  
    ~B() { cout << "destructed" << endl; }  
    B(int i) :data(i) {  
        cout << "constructed by parameter " << data << endl;  
    } 
private:  
    int data; 
}; 
B Play(B b) {  
    return b; 
} 
int main() {  
    B temp = Play(5);  
    return 0; 
}`,
    answer:`constructed by parameter 5\n
destructed\n
destructed\n
destructed`,
    explanation:`正确答案为：constructed by parameter 5\n
destructed\n
destructed\n
destructed`,
  },
  {
    "id": 68,
    "type": "choice",
    "question": "静态成员函数没有：",
    "options": ["A. 返回值", "B. this指针", "C. 指针参数", "D. 返回类型"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 69,
    "type": "choice",
    "question": "下列哪一种情况下，类的复制构造函数不会被调用",
    "options": ["A. 用类的一个对象赋值给另一个对象时", "B. 当用类的一个对象去初始化该类的另一个对象时", "C. 如果函数的形参是类的对象，调动函数时，进行形参和实参结合时", "D. 如果函数的返回值是类的对象，函数执行完成返回调用者时"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 70,
    "type": "choice",
    "question": "假定AA为一个类，a()为该类公有的函数成员，x为该类的一个对象，则访问x对象中函数成员a()的格式为（）",
    "options": ["A. x.a", "B. x.a()", "C. x->a()", "D. (*x).a()"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 71,
    "type": "choice",
    "question": "若类A的构造函数定义为\nA(int aa=1, int bb=0) { a = aa; b = bb; }\n则执行：A x(4);后，x.a和x.b的值分别是（ ）",
    "options": ["A. 1,0", "B. 1,4", "C. 4,0", "D. 4,1"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 72,
    "type": "choice",
    "question": "已知类A中的一个成员函数说明为void fun(A &a);，则A &a的含义是（ ）",
    "options": ["A. 将a的地址值赋给变量fun", "B. 指向类A的指针为a", "C. a是类A的对象引用，用来做函数fun()的形参", "D. 变量A与a按位相与运算后作为函数fun()的参数"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 73,
    "type": "choice",
    "question": "假设有以下类A,下面程序片段,哪个是不正确的?\n\nclass A{\n public:\n    int func(int a){return a*a;}\n};",
    "options": ["A. A a;a.func(5);", "B. A *p=new A;p->func(5);", "C. A a;A &r=a;r.func(5);", "D. A a,b;if(a!=b) a.func(5);"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 74,
    "type": "choice",
    "question": "类的实例化是指（    ）。",
    "options": ["A. 定义一个类", "B. 定义一个类的对象", "C. 调用对象的成员函数", "D. 访问对象的数据成员"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 75,
    "type": "choice",
    "question": "以下关于this指针的说法不正确的是（）",
    "options": ["A. const成员函数内部不可以使用this指针", "B. 成员函数内的this指针指向成员函数所作用的对象", "C. 在构造函数内部可以使用this指针", "D. 在析构函数内部可以使用this指针"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 76,
    "type": "choice",
    "question": "下面关于C++中this指针的说法，哪个是正确的（    ）。",
    "options": ["A. 在类的所有成员函数中，都存在this指针", "B. 只有类的静态成员函数中才存在this指针", "C. 只有类的非静态成员函数中才存在this指针", "D. 在类的所有成员函数中，都不存在this指针"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 77,
    "type": "choice",
    "question": "假设A是一个类的名字，下面程序片段，类A会调用析构函数几次？\nint main(){\nA * p = new A[2];\nA * p2 = new A;\nA a;\ndelete [] p;\n}",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 78,
    "type": "choice",
    "question": "有如下的类定义：\n\nclass Sample\n{\npublic:\n    Sample( );\n    Sample(int x );\n    ......    \n};\n\n\n动态申请对象存储单元，调用无参构造函数的语句是（）。",
    "options": ["A. Sample *a=new Sample(2);", "B. Sample a=new Sample( );", "C. Sample *a=new Sample;", "D. Sample a=new Sample;"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 79,
    "type": "choice",
    "question": "有如下类的定义：\n\nclass Sample\n{\npublic:\n    Sample( );\n    Sample(int x );\n    ......\n};\n\n动态申请对象存储单元，调用一个带参构造函数，初值为2的语句是（）。",
    "options": ["A. Sample *a=new Sample(2);", "B. Sample a=new Sample(2);", "C. Sample *a=new Sample[2];", "D. Sample a=new Sample[2];"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 80,
    "type": "choice",
    "question": "在下面类声明中，关于生成对象不正确的是（ ）。\nclass point\n{ public:\n         int x;\n         int y;\n         point(int a,int b)   {x=a;y=b;}\n};",
    "options": ["A. point p(10,2);", "B. point *p=new    point(1,2);", "C. point *p=new point[2];", "D. point *p[2]={new point(1,2), new  point(3,4)};"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 81,
    "type": "choice",
    "question": "下面程序的运行结果为\n\n#include<iostream.h>\nclass A\n{\npublic:\n   A（）{cout<<\"1\";}\n   ~A（）{cout<<\"2\";}\n};\nclass B:public A\n{\npublic:\n     B（）{cout<<\"3\";}\n     ~B（）{cout<<\"4\";}\n};\nvoid main（）\n{  B b; }",
    "options": ["A. 1234", "B. 1324", "C. 1342", "D. 3142"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 82,
    "type": "choice",
    "question": "下面程序的运行结果为\n\n#include<iostream.h>\nclass A\n{\n  int num;\npublic:\n  A（int i）{num=i;}\n  A（A &a）{num=a.num++;}\n  void print（）{cout<<num;}\n};\nvoid main（）\n{\n  A a （1）,b（a）;\n  a.print（）;\n  b.print（）;\n}",
    "options": ["A. 11", "B. 12", "C. 21", "D. 22"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 83,
    "type": "choice",
    "question": "下列关于常指针的定义，错误的是：",
    "options": ["A. const int * p;", "B. int * const p;", "C. const int * const p;", "D. int * p const;"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 84,
    "type": "choice",
    "question": "下列哪个定义表明指针指向的内容不能修改（ ）",
    "options": ["A. const char *p", "B. char* const p", "C. const char& p", "D. char p"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 85,
    "type": "choice",
    "question": "下列代码能正确执行的是（ ）",
    "options": ["A. char a='C';\nconst char& p=a;", "B. char a='C';\nchar* const p;\np=&a;", "C. char a='C';\nconst char& p;\np=a;", "D. char a='C';\nchar& p;\np=a;"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 86,
    "type": "choice",
    "question": "已有语句：const char* name=\"zhangsan\";\n下面语句正确的是（         ）   ",
    "options": ["A. name[5]='L';", "B. *name=\"lisi\";", "C. name=\"lisi\";", "D. name='L';"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 87,
    "type": "choice",
    "question": "关于函数的返回值的说法，正确的是：",
    "options": ["A. 函数必须有返回值", "B. 函数可以有多个返回值", "C. 函数可以有一个返回值", "D. 函数的返回值个数不确定"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 88,
    "type": "choice",
    "question": "有\n\nvoid f(int &a) { a=3; }，\n\n则\n\nint n=1;\nf(n);\ncout<<n<<endl;\n\n的结果是（）",
    "options": ["A. 1", "B. 3", "C. 0", "D. 不确定"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 89,
    "type": "choice",
    "question": "一个函数为void f(int x, char y = ‘a’)，另一个函数为void f(int)，则它们____。",
    "options": ["A. 不能在同一程序块中定义", "B. 可以在同一个程序块中定义并可重载", "C. 可以在同一个程序块中定义，但不可以重载", "D. 以上说法均不正确"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 90,
    "type": "choice",
    "question": "两个函数要构成重载，除了函数名相同以外，还需要（  ）。",
    "options": ["A. 两个函数的参数类型必须不同", "B. 两个函数的参数个数必须不同", "C. 两个函数的参数类型不同或者参数个数不同", "D. 两个函数的返回值类型必须不同"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 91,
    "type": "choice",
    "question": "如果默认参数的函数声明为“ void fun(int a,int b=1,char c='a',float d=3.2);”，\n则下面调用写法正确的是（ ）。",
    "options": ["A. fun();", "B. fun(2,3);", "C. fun(2, ,'c',3.14)", "D. fun(int a=1);"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 92,
    "type": "choice",
    "question": "关于函数的默认参数\n\n若有下面的函数声明\n\nvoid F(int x = 1, y = 2);\n\n则 ▁▁▁▁▁ 是错误的语句。",
    "options": ["A. F();", "B. F(3);", "C. F(, 5);", "D. F(6, 9);"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 93,
    "type": "choice",
    "question": "分析以下程序：程序的输出结果是\n\n#include <iostream>\nusing namespace std;\nvoid fun(int num)\n{\n    cout << num << endl;\n}\nvoid fun(char ch)\n{\n    cout << (ch + 1) << endl;\n}\nint main()\n{\n    fun('A');\n    return 0;\n}",
    "options": ["A. 65", "B. 66", "C. A", "D. B"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 94,
    "type": "choice",
    "question": "已知文本文件的内容是字符串“Manam I’m Adam”，下列语句中哪一项的输出不是“dam”：____。",
    "options": ["A. char str[30]; ifile.seekg(11, ios::beg);     ifile.getline(str, 30); cout << str << endl;", "B. char str[30]; ifile.seekg(11, ios::beg);     ifile.get(str, 30); cout << str << endl;", "C. char str[30]; ifile.seekg(2, ios::beg);     ifile.getline(str, 30); cout << str << endl;", "D. char str[30]; ifile.seekg(11, ios::beg);     ifile.get(str, 20); cout << str << endl;"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 95,
    "type": "choice",
    "question": "下列语句中，不能连续输出3个值的是。",
    "options": ["A. cout<<x<<y<<z;", "B. cout<<x,y,z;", "C. cout<<x; cout<<y; cout<<z;", "D. cout<<(x,y,z)<<(x,y,z)<<(x,y,z);"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 96,
    "type": "choice",
    "question": "在C++中，cin是（）。",
    "options": ["A. 预定义的类", "B. 预定义的函数", "C. 一个标准的语句", "D. 预定义的对象"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 97,
    "type": "choice",
    "question": "有语句“int a;”，则以下语句正确的是(     )。 ",
    "options": ["A. scanf(\"%d\",a);", "B. printf(\"%d\\n\",a);    ", "C. cin>>a>>endl;    ", "D. cout< <a;"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 98,
    "type": "choice",
    "question": "有代码如下：\n\nint n;\nstring s;\ncin>>n;\ngetline(cin, s);\ncout<<s.size()<<endl;\n\n则在输入以下数据后得到结果是（     ）。\n\n1\nHello World",
    "options": ["A. 11", "B. 0", "C. 5", "D. 12"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 99,
    "type": "choice",
    "question": "基于以下代码，不能正确输出字符串的是(     )。\n\nstring s;\nchar ts[10];\ncin>>ts;\ns=ts;",
    "options": ["A. printf(\"%s\\n\", s); ", "B. printf(\"%s\\n\", s.c_str());", "C. cout<<s<<endl;", "D. printf(\"%s\\n\", ts);"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 100,
    "type": "choice",
    "question": "下列程序代码，正确的输出结果是（    ）\n\nint a=0xff;\nint b=017;\ncout<<a<<\",\"<<b<<endl;",
    "options": ["A. 0xff,017", "B. ff,17", "C. 255,15", "D. 255,17"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 101,
    "type": "choice",
    "question": "下列程序代码，正确的输出结果是（    ）\n\nint a=0xfe;\nint b=027;\ncout<<a<<\",\"<<b<<endl;",
    "options": ["A. 0xfe,027", "B. fe,27", "C. 254,23", "D. 254,27"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 102,
    "type": "choice",
    "question": "下列程序代码，正确的输出结果是（    ）\n\nint a=0xfe;\nchar b=062;\ncout<<a<<\",\"<<b<<endl;",
    "options": ["A. 0xfe,062", "B. fe,62", "C. 254,2", "D. 254,62"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 103,
    "type": "choice",
    "question": "下列程序代码，正确的输出结果是（    ）\n\nchar a=0x7a;\nchar b=062;\ncout<<a<<\",\"<<b<<endl;",
    "options": ["A. 0x7a,062", "B. 7a,62", "C. z,2", "D. 07a,062"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 104,
    "type": "choice",
    "question": "使用cout输出整数时，若要控制输出的宽度，可用（    ）",
    "options": ["A. fixed", "B. setprecision", "C. dec", "D. setw"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 105,
    "type": "choice",
    "question": "有语句“double a=123.456789;”，若要控制把a保留3位小数输出，可用（    ）",
    "options": ["A. cout<<fixed<<setprecision(3)<<a;", "B. cout<<setprecision(3)<<a;", "C. cout<<fixed(3)<<a;", "D. cout<<fixed<<setw(3)<<a;"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 106,
    "type": "choice",
    "question": "x 和 y 均为 bool 量，则 x && y 为真的条件是（ ）。",
    "options": ["A. x 和 y 均为真", "B. x 和 y 有一个为真", "C. x 和 y 均为假", "D. x 和 y 有一个为假"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 107,
    "type": "choice",
    "question": "设x和y均为bool量，则x&&y为真的条件是（）。",
    "options": ["A. 它们均为真", "B. 其中一个为真", "C. 它们均为假", "D. 其中一个为假"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 108,
    "type": "choice",
    "question": "设x和y均为bool量，则x || y为假的条件是（）。",
    "options": ["A. 它们均为真", "B. 其中一个为真", "C. 它们均为假", "D. 其中一个为假"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 109,
    "type": "choice",
    "question": "在（    ）情况下适宜采用inline定义内联函数。",
    "options": ["A. 函数体含有循环语句", "B. 函数体含有递归语句", "C. 函数代码少、频繁调用", "D. 函数代码多、不常调用"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 110,
    "type": "choice",
    "question": "下面说法正确的是（）。",
    "options": ["A. 内联函数在运行时是将该函数的目标代码插入每个调用该函数的地方", "B. 内联函数在编译时是将该函数的目标代码插入每个调用该函数的地方", "C. 类的内联函数必须在类体内定义", "D. 类的内联函数必须在类体外通过加关键字inline定义"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 111,
    "type": "choice",
    "question": "以下关于内联函数的说法，错误的是（    ）。",
    "options": ["A. 调用内联函数时，不需要跳转到内联函数内部去执行", "B. 内联函数跟普通函数的运行机制没什么不同", "C. 代码简短、频繁调用的函数适合作为内联函数", "D. 定义内联函数的关键字是inline"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 112,
    "type": "choice",
    "question": "以下关于内联函数的说法，正确的是（ ）。",
    "options": ["A. 内联函数中适合包括循环语句", "B. 内联函数中适合包括switch语句", "C. 内联函数中适合包括递归调用语句", "D. 内联函数比普通函数的运行效率更高"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 113,
    "type": "choice",
    "question": "下列关于构造函数的描述中，错误的是（）",
    "options": ["A. 构造函数名与类名相同", "B. 构造函数可以有返回值", "C. 构造函数可以重载", "D. 每个类都有构造函数"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 114,
    "type": "choice",
    "question": "对类的构造函数和析构函数描述正确的是",
    "options": ["A. 构造函数可以重载，析构函数不能重载", "B. 构造函数不能重载，析构函数可以重载", "C. 构造函数可以重载，析构函数也可以重载", "D. 构造函数不能重载，析构函数也不能重载"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 115,
    "type": "choice",
    "question": "假设MyClass是一个类，则该类的拷贝初始化构造函数的声明语句为（ ）",
    "options": ["A. MyClass&(MyClass x);", "B. MyClass(MyClass x);", "C. MyClass(MyClass &x);", "D. MyClass(MyClass *x);"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 116,
    "type": "choice",
    "question": "对于任意一个类，析构函数的个数最多为（ ）",
    "options": ["A. 0", "B. 1", "C. 2", "D. 3"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 117,
    "type": "choice",
    "question": "关于类的构造函数和析构函数描述中错误的是( )。",
    "options": ["A. 类的析构函数可以重载", "B. 类的构造函数可以重载", "C. 析构函数是系统自动调用的", "D. 定义一个类时可以不显示定义构造函数和析构函数"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 118,
    "type": "choice",
    "question": "下列哪个代码不会调用对象的拷贝构造函数（ ）",
    "options": ["A. MyClass a;\nMyClass b=a;", "B. MyClass a;\nMyClass b(a);", "C. MyClass a;\nMyClass& b=a;", "D. void f(MyClass obj)\n{\n   ....\n}\nMyClass a;\nf(a);"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 119,
    "type": "choice",
    "question": "假定MyClass为一个类,则执行MyClass a,b(3),*p；语句时,自动调用该类构造函数()次。",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 120,
    "type": "choice",
    "question": "阅读下列程序，程序的运行结果为\n#include \nusing namespace std;\nclass MyClass {\npublic:\n    MyClass() { cout << 'A'; }\n    MyClass(char c) { cout << c; }\n    ~MyClass() { cout << 'B'; }\n};\nint main()\n{\n    MyClass p1, * p2;\n    p2 = new MyClass('X');\n    delete p2;\n    return 0;\n}",
    "options": ["A. ABX", "B. ABXB", "C. AXB", "D. AXBB"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 121,
    "type": "choice",
    "question": "Person类的定义如下，下面4条语句中语句哪条不会编译报错？\n\nclass Person {\nprivate:\n    int m_age;\npublic:\n    Person(int age): m_age(age) {}\n};\n\n",
    "options": ["A. Person p;", "B. Person *p = new Person;", "C. Person p(18);", "D. Person *p = new Person();"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 122,
    "type": "choice",
    "question": "在下面类声明中，关于生成对象不正确的是（ ）。\nclass point\n{ public:\n         int x;\n         int y;\n         point(int a,int b)   {x=a;y=b;}\n};",
    "options": ["A. point p(10,2);", "B. point *p=new    point(1,2);", "C. point *p=new point[2];", "D. point *p[2]={new point(1,2), new  point(3,4)};"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 123,
    "type": "choice",
    "question": "在创建派生类对象时，构造函数的执行顺序是(    )。",
    "options": ["A. 对象成员构造函数、基类构造函数、派生类本身的构造函数", "B. 基类构造函数、对象成员构造函数、派生类本身的构造函数", "C. 基类构造函数、派生类本身的构造函数、对象成员构造函数", "D. 派生类本身的构造函数、基类构造函数、对象成员构造函数"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 124,
    "type": "choice",
    "question": "以下说法正确的是？",
    "options": ["A. 派生类可以和基类有同名成员函数，但是不能有同名成员变量", "B. 派生类的成员函数中，可以调用基类的同名同参数表的成员函数", "C. 派生类和基类的同名成员函数必须参数表不同，否则就是重复定义", "D. 派生类和基类的同名成员变量存放在相同存储空间"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 125,
    "type": "choice",
    "question": "父类Base和子类Derive的定义如下。子类继承了父类的成员fun，a，b，在子类中，fun，a，b的访问控制权限分别是（       ）\nclass Base\n{\n    public:\n        void fun();\n    protected:\n        float a;\n    private:\n        int b;\n};\nclass Derive : private Base\n{\n};",
    "options": ["A. public, protected, private", "B.  private, private, private", "C.  private, private, 不可直接访问", "D. public, protected, 不可直接访问"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 126,
    "type": "choice",
    "question": "基类的公有成员和保护成员被保护继承后变成派生类的:\n\n",
    "options": ["A. 公有成员", "B. 私有成员", "C. 保护成员", "D. 不能直接访问"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 127,
    "type": "choice",
    "question": "基类中的私有成员，在派生类中变成？\n",
    "options": ["A. 公有成员", "B. 私有成员", "C. 保护成员", "D. 不能直接访问"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 128,
    "type": "choice",
    "question": "基类保护成员被公有继承后，在派生类中变成?\n",
    "options": ["A. 公有成员", "B. 私有成员", "C. 保护成员", "D. 不能直接访问"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 129,
    "type": "choice",
    "question": "在公有派生类中，对基类成员的访问权限，下列说法正确的是（     ）。",
    "options": ["A. 只能直接访问基类的公有成员", "B. 只能直接访问基类的保护成员", "C. 只能直接访问基类的公有成员和保护成员", "D. 可以直接访问基类的公有成员、保护成员和私有成员"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 130,
    "type": "choice",
    "question": "在保护派生类中，基类的公有成员在派生类中的访问属性是（   ）。",
    "options": ["A. 公有", "B. 私有", "C. 保护", "D. 不可访问"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 131,
    "type": "choice",
    "question": "若obj是类D的对象，则下列语句中正确的是\n\nclass B{\nprivate: void fun1(){ }\nprotected: void fun2(){ }\npublic: void fun3(){ }\n};\nclass D : public B {\nprotected: void fun4(){ }\n};",
    "options": ["A. obj.fun1();", "B. obj.fun2();", "C. obj.fun4();", "D. obj.fun3();"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 132,
    "type": "choice",
    "question": "下面，有关派生类构造函数的论述，错误的是（    ）",
    "options": ["A. 派生类构造函数，需要为基类构造函数传递参数；", "B. 派生类构造函数，需要为内嵌子对象的初始化传递参数；", "C. 派生类构造函数，仅对派生类的新增数据成员初始化传递参数；", "D. 派生类构造函数，可以采用初始化列表的方式为常成员函数传递初始化参数。"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 133,
    "type": "choice",
    "question": "在下列关键字中,用以说明类中公有成员的是（ ）。",
    "options": ["A. public", "B. private", "C. protected", "D. friend"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 134,
    "type": "choice",
    "question": "在面向对象系统中，对象是基本的运行时实体，它 _____  。",
    "options": ["A. 只能包括数据(属性)", "B. 只能包括操作(行为)", "C. 把属性和行为封装为一个整体", "D. 必须具有显式定义的对象名"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 135,
    "type": "choice",
    "question": "关于信息隐蔽\n\n信息隐蔽是通过 ▁▁▁▁▁ 实现的。",
    "options": ["A. 抽象性", "B. 封装性", "C. 继承性", "D. 传递性"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 136,
    "type": "choice",
    "question": "假定AA为一个类，a()为该类公有的函数成员，x为该类的一个对象，则访问x对象中函数成员a()的格式为（   ）",
    "options": ["A. x.a", "B. x.a()", "C. x->a()", "D. (*x).a()"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 137,
    "type": "choice",
    "question": "类的实例化是指（    ）。",
    "options": ["A. 定义一个类", "B. 定义一个类的对象", "C. 调用对象的成员函数", "D. 访问对象的数据成员"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 138,
    "type": "choice",
    "question": "下列关于类的说法中，错误的是（   ）。",
    "options": ["A. 在C++中，是通过类来实现封装性的", "B. 在C++中，用class定义的类的成员默认权限是私有的", "C. 在C++中，类的成员函数只能定义在类内，不能在类外定义", "D. 类和对象的关系是抽象和具体的关系"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 139,
    "type": "choice",
    "question": "关于成员函数特征的描述中，（  ）是错误的。",
    "options": ["A. 成员函数可以重载", "B. 成员函数一定是内联函数", "C. 一个类可以没有成员函数", "D. 成员函数可以设置参数的默认值"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 140,
    "type": "choice",
    "question": "已知类A中的一个成员函数说明为void fun(A &a);，则A &a的含义是（ ）",
    "options": ["A. 将a的地址值赋给变量fun", "B. 指向类A的指针为a", "C. a是类A的对象引用，用来做函数fun()的形参", "D. 变量A与a按位相与运算后作为函数fun()的参数"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 141,
    "type": "choice",
    "question": "关于C++中this指针的说法，正确的是（   ）。",
    "options": ["A. this指针指向调用当前成员函数的对象实例", "B. this指针是类的显式定义的数据成员", "C. 类的所有成员函数都隐含一个this指针", "D. 不能通过this指针修改对象的值"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 142,
    "type": "choice",
    "question": "以下对类A的定义,哪个是正确的?",
    "options": ["A. class A{     private:int v;     public:void fun(){} }", "B. class A{     int v;     A * next;     void fun(){} };", "C. class A{     int v; public:     void fun(); }; A::void fun(){}", "D. class A{     int v; public:     A next;     void fun(){} };"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 143,
    "type": "choice",
    "question": "结构化程序设计的基本结构不包含（ ）。",
    "options": ["A. 顺序", "B. 选择", "C. 跳转", "D. 循环"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 144,
    "type": "choice",
    "question": "（ ）不是面向对象程序设计的主要特征。",
    "options": ["A. 封装", "B. 继承", "C. 多态", "D. 结构"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 145,
    "type": "choice",
    "question": "关于C++与C 语言关系的描述中，（       ）是错误的。",
    "options": ["A. C 语言是C++语言的一个子集", "B. C 语言与C++语言是兼容的", "C. C++语言对C 语言进行了一些改进", "D. C++语言和C 语言都是面向对象的"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 146,
    "type": "choice",
    "question": "下列关于C++的描述中，错误的是____。",
    "options": ["A. 保持与C兼容", "B. 支持面向对象的机制", "C. 在可重用性、可扩充性、可维护性和可靠性等方面都较C语言有所提高", "D. C++是所有计算机语言的起源"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 147,
    "type": "choice",
    "question": "关于面向对象方法\n\n下面概念中，不属于面向对象方法的是 ▁▁▁▁▁。",
    "options": ["A. 对象", "B. 继承", "C. 类", "D. 过程调用"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 148,
    "type": "choice",
    "question": "关于面向对象程序设计\n\n面向对象程序设计主要考虑的是提高软件的 ▁▁▁▁▁。",
    "options": ["A. 可靠性", "B. 可移植性", "C. 可修改性", "D. 可重用性"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 149,
    "type": "choice",
    "question": "关于面向对象的特征\n\n▁▁▁▁▁ 不是面向对象的特征。",
    "options": ["A. 多态性", "B. 继承性", "C. 封装性", "D. 过程调试"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 150,
    "type": "choice",
    "question": "关于结构化程序设计\n\n结构程序设计的三种结构是 ▁▁▁▁▁。",
    "options": ["A. 顺序结构、选择结构、转移结构", "B. 分支结构、等价结构、循环结构", "C. 多分支结构、赋值结构、等价结构", "D. 顺序结构、选择结构、循环结构"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 151,
    "type": "choice",
    "question": "关于C和C++的描述中，正确的是（ ）",
    "options": ["A. C是面向过程，C++是纯面向对象", "B. C++是C的超集", "C. C++是对C的错误的修改", "D. C++和C没有关系"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 152,
    "type": "choice",
    "question": "C++语言支持过程程序设计方法和（ ）设计方法。",
    "options": ["A. 面向对象", "B. 面向函数", "C. 面向用户", "D. 面向问题"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 153,
    "type": "choice",
    "question": "C++语言是（ ）",
    "options": ["A. 机器语言", "B. 汇编语言", "C. 面向过程的高级语言", "D. 面向对象的高级语言"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 154,
    "type": "choice",
    "question": "面向对象的程序设计方法的主要优势在于（）。",
    "options": ["A. 编写硬件接口程序", "B. 编写小规模的数值计算程序", "C. 开发大型系统", "D. 开发函数库"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 155,
    "type": "choice",
    "question": "在C++中，实现封装性需借助于（）。",
    "options": ["A. 枚举", "B. 类", "C. 数组", "D. 函数"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 156,
    "type": "choice",
    "question": "C 语言是 ▁▁▁▁▁ 的程序设计语言。",
    "options": ["A. 面向过程", "B. 面向对象", "C. A 和 B", "D. 以上都不对"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 157,
    "type": "choice",
    "question": "下列说法中正确的是（        ）",
    "options": ["A. 在C++语言中，一条语句后面连续写了两个分号一定会编译出错", "B. 在C++中，Abc和abc是两个不同的标识符", "C. C++源程序文件的扩展名是.c++", "D. C++是一种纯面向对象程序设计语言"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 158,
    "type": "choice",
    "question": "在C++中，下列说法中正确的是（         ）",
    "options": ["A. 引用能够完全替代指针的作用", "B. 系统要为类和对象都分配存储空间", "C. 类的实例化是指定义类的对象", "D. 类的成员函数一定是内联函数"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 159,
    "type": "choice",
    "question": "下列说法错误的是（  ）",
    "options": ["A. 现实中的对象一般表示为：属性+行为", "B. 类是一组具有相同属性和行为的对象的抽象", "C. 类是对象的一个实例", "D. 对象是类的一个实例"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 160,
    "type": "choice",
    "question": "C++的头文件扩展名是（     ）",
    "options": ["A. head", "B. h", "C. cpp", "D. c++"],
    "answer": "B",
    "explanation": "无"
  },
  {
    "id": 161,
    "type": "choice",
    "question": "面向对象程序设计的基本特征不包括（     ）",
    "options": ["A. 封装性", "B. 继承性", "C. 多态性", "D. 反射性"],
    "answer": "D",
    "explanation": "无"
  },
  {
    "id": 162,
    "type": "choice",
    "question": "在 C++ 中，实现封装性需借助于（        ）",
    "options": ["A. 数组", "B. 引用", "C. 类", "D. 指针"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 163,
    "type": "choice",
    "question": "下列选项，错误的是（    ）。",
    "options": ["A. 在C++源程序中，必须有main函数", "B. 在C++源程序中，每条语句都是以分号结束", "C. 在C++源程序中，每一行只能写一条语句", "D. 在C++源程序中，编译时会忽略注释中的语法错误"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 164,
    "type": "choice",
    "question": "下列选项中，最能体现出代码复用的特征是（     ）。",
    "options": ["A. 抽象性", "B. 封装性", "C. 继承性", "D. 多态性"],
    "answer": "C",
    "explanation": "无"
  },
  {
    "id": 165,
    "type": "choice",
    "question": "下列选项中，哪个是C++的合法标识符（    ）。",
    "options": ["A. List_3", "B. ~3List", "C. List-3", "D. 3_List"],
    "answer": "A",
    "explanation": "无"
  },
  {
    "id": 166,
    "type": "choice",
    "question": "下列哪个选项在C++中是不合法的标识符（   ）。",
    "options": ["A. xy5", "B. 5xy", "C. xy_5", "D. x_5y"],
    "answer": "B",
    "explanation": "无"
  }
];