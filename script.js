// ============================================================
//  1. 题目数据
// ============================================================
const RAW_TEXT = `
        1. 有如下程序： 
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
执行这个程序后，输出星号“*”的个数为（ ）。
A. 1
B. 2
C. 3
D. 4
2. 有如下程序： 
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
程序执行后，输出结果为（ ）。
A. 11
B. 2333
C. 333
D. 11333
3. 有如下程序： 
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
程序执行后，输出结果为（ ）。
A. 3
B. 4
C. 6
D. 7
4. 假定 AB 为一个类，px 为指向该类的一个含有 n 个对象的动态数组的指针，则执行语句 delete ［］px; 时，共调用该类析构函数的次数为（ ）。
A. 0
B. 1
C. n
D. n+1
5. 有类定义如下： 
class My Class { 
public: 
    MyClass() { cout<<1; } 
}; 
执行语句 MyClass a, b[2], *p[2]; 后，程序的输出结果是（ ）。
A. 11
B. 111
C. 1111
D. 11111
6. 设有 Point 类定义如下： 
class Point { 
    int x，y； 
public： 
    Point(int x1=0，int y1=0)：x(x1)，y(y1){} 
}; 
执行语句 Point a(2)，b[3]，*c[4]; 时，Point 类的构造函数被调用的次数是（ ）。
A. 2
B. 3
C. 4
D. 8
7. Sample 是一个类，执行语句 Sample a[2], *p= new Sample; 后，调用 Sample 类的构造函数的次数是（ ）。
A. 0
B. 1
C. 2
D. 3
8. 有如下头文件： 
int fl(); 
static int f2(); 
class MA { 
public:
    int f3(); 
    static int f4(); 
}; 
在所描述的函数中，具有隐含的 this 指针的是（ ）。
A. f1
B. f2
C. f3
D. f4
9. 有如下程序： 
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
程序执行后，输出结果为（ ）。
A. 112
B. 132
C. 334
D. 354
10. 由于常对象不能被更新，因此（ ）。
A. 通过常对象只能调用它的常成员函数
B. 通过常对象只能调用静态成员函数
C. 常对象的成员都是常成员
D. 通过常对象可以调用任何不改变对象值的成员函数
        `;

// ============================================================
//  2. 答案映射
// ============================================================
const ANSWER_MAP = {
    1: 'D', 2: 'B', 3: 'A', 4: 'A', 5: 'B', 6: 'C', 7: 'D', 8: 'D', 9: 'D', 10: 'A'
};

// ============================================================
//  3. 解析题目（保留换行和缩进）
// ============================================================


function parseQuestions(text) {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const questions = [];
    let current = null;

    for (let line of lines) {
        const trimmed = line.trim();
        const numMatch = trimmed.match(/^(\d+)\.\s*(.*)/);
        if (numMatch) {
            if (current) questions.push(current);
            const num = parseInt(numMatch[1]);
            const content = numMatch[2].trim();
            current = {
                id: num,
                question: content,
                options: {}
            };
            continue;
        }
        const optMatch = trimmed.match(/^([A-D])\.\s*(.*)/);
        if (optMatch && current) {
            const label = optMatch[1];
            const text = optMatch[2].trim();
            current.options[label] = text;
            continue;
        }
        if (current && !numMatch && !optMatch) {
            if (Object.keys(current.options).length === 0) {
                // 保留原始行（含前导空格）并用换行拼接
                current.question += '\n' + line;
            } else {
                const keys = Object.keys(current.options);
                if (keys.length > 0) {
                    const lastKey = keys[keys.length - 1];
                    current.options[lastKey] += ' ' + trimmed;
                }
            }
        }
    }
    if (current) questions.push(current);
    return questions;
}

// ============================================================
//  4. 应用状态
// ============================================================
const allQuestions = parseQuestions(RAW_TEXT);
const total = allQuestions.length;
const LABELS = ['A', 'B', 'C', 'D'];
const questionData = allQuestions.map(q => ({
    id: q.id,
    question: q.question,
    options: LABELS.map(label => ({
        label: label,
        text: q.options[label] || '(选项缺失)'
    })),
    correct: ANSWER_MAP[q.id] || null
}));

// 状态变量
let selections = new Array(total).fill(null);
let answeredCorrect = new Array(total).fill(false);
let isErrorState = new Array(total).fill(false);
let currentIndex = 0;
let inSummary = false;

// ============================================================
//  5. 持久化存储
// ============================================================
const STORAGE_KEY = 'POLITICS_QUIZ_STATE';

function saveState() {
    try {
        const state = {
            selections: selections,
            answeredCorrect: answeredCorrect,
            isErrorState: isErrorState,
            currentIndex: currentIndex,
            inSummary: inSummary
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.warn('保存状态失败:', e);
    }
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return false;
        const state = JSON.parse(raw);
        if (state.selections && state.selections.length === total &&
            state.answeredCorrect && state.answeredCorrect.length === total &&
            state.isErrorState && state.isErrorState.length === total &&
            typeof state.currentIndex === 'number') {
            selections = state.selections;
            answeredCorrect = state.answeredCorrect;
            isErrorState = state.isErrorState;
            currentIndex = Math.min(state.currentIndex, total - 1);
            inSummary = false;
            return true;
        }
        return false;
    } catch (e) {
        console.warn('读取状态失败:', e);
        return false;
    }
}

function clearState() {
    localStorage.removeItem(STORAGE_KEY);
}

// ============================================================
//  6. DOM 引用（增加容错）
// ============================================================
const progressText = document.getElementById('progressText');
const qNumber = document.getElementById('qNumber');
const qText = document.getElementById('qText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMsg = document.getElementById('feedbackMsg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const summaryContainer = document.getElementById('summaryContainer');
const summaryGrid = document.getElementById('summaryGrid');
const summaryStats = document.getElementById('summaryStats');
const backBtn = document.getElementById('backBtn');
const questionArea = document.getElementById('questionArea');

// 检查关键元素是否存在
if (!qText || !optionsContainer) {
    console.error('❌ 关键 DOM 元素未找到，请检查 HTML 中 id 是否正确');
}

// ============================================================
//  7. 渲染函数
// ============================================================
function renderQuestion(index) {
    if (inSummary) return;
    const data = questionData[index];
    if (!data) {
        console.error('❌ 题目数据为空，index:', index);
        return;
    }

    progressText.textContent = `${index + 1} / ${total}`;
    qNumber.textContent = `第 ${data.id} 题`;
    // 使用 textContent 赋值，保留换行符 \n
    qText.textContent = data.question;

    const selected = selections[index];
    const isCorrect = answeredCorrect[index];
    const isError = isErrorState[index];
    const correctAnswer = data.correct;

    optionsContainer.innerHTML = '';
    data.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        if (isCorrect) {
            if (selected === opt.label) {
                btn.classList.add('selected');
            }
            btn.classList.add('disabled');
        } else if (isError) {
            if (opt.label === correctAnswer) {
                btn.classList.add('correct');
            } else if (opt.label === selected) {
                btn.classList.add('wrong');
            }
            btn.classList.add('disabled');
        } else {
            if (selected === opt.label) {
                btn.classList.add('selected');
            }
        }

        btn.innerHTML = `
                    <span class="label">${opt.label}</span>
                    <span class="text">${opt.text}</span>
                `;
        btn.dataset.label = opt.label;

        if (!isCorrect && !isError) {
            btn.addEventListener('click', function () {
                handleOptionClick(index, opt.label);
            });
        }

        optionsContainer.appendChild(btn);
    });

    if (isCorrect) {
        feedbackMsg.className = 'feedback-msg show success';
        feedbackMsg.textContent = '✅ 回答正确！已自动跳转，但您可以通过导航返回。';
    } else if (isError) {
        feedbackMsg.className = 'feedback-msg show error';
        feedbackMsg.textContent = `❌ 回答错误。正确答案是 ${correctAnswer}，请记住。`;
    } else {
        feedbackMsg.className = 'feedback-msg';
        feedbackMsg.textContent = '';
    }

    prevBtn.disabled = (index === 0);
    nextBtn.textContent = (index === total - 1) ? '完成 ✅' : '下一题 ▶';
    updateProgressText();
    saveState();
}

function handleOptionClick(index, label) {
    if (answeredCorrect[index] || isErrorState[index]) return;

    const data = questionData[index];
    const correctAnswer = data.correct;

    if (selections[index] === label) {
        selections[index] = null;
        renderQuestion(index);
        updateProgressText();
        return;
    }

    selections[index] = label;

    if (label === correctAnswer) {
        answeredCorrect[index] = true;
        renderQuestion(index);
        updateProgressText();
        setTimeout(() => {
            if (index === total - 1) {
                showSummary();
            } else {
                goTo(index + 1);
            }
        }, 300);
    } else {
        isErrorState[index] = true;
        renderQuestion(index);
        updateProgressText();
    }
}

function updateProgressText() {
    const answered = selections.filter(s => s !== null).length;
    progressText.textContent = `${currentIndex + 1} / ${total}  · 已答 ${answered}`;
}

// ============================================================
//  8. 导航
// ============================================================
function goTo(index) {
    if (index < 0 || index >= total) return;
    currentIndex = index;
    renderQuestion(currentIndex);
}

prevBtn.addEventListener('click', () => {
    if (inSummary) return;
    goTo(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    if (inSummary) return;
    if (currentIndex === total - 1) {
        showSummary();
    } else {
        goTo(currentIndex + 1);
    }
});

// ============================================================
//  9. 汇总
// ============================================================
function showSummary() {
    inSummary = true;
    questionArea.style.display = 'none';
    document.querySelector('.nav-area').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    summaryContainer.classList.add('visible');

    const answered = selections.filter(s => s !== null).length;
    const correctCount = answeredCorrect.filter(v => v === true).length;
    summaryStats.textContent = `已答 ${answered} / ${total} 题，正确 ${correctCount}`;

    summaryGrid.innerHTML = '';
    questionData.forEach((q, idx) => {
        const sel = selections[idx];
        const isCorrect = answeredCorrect[idx];
        const div = document.createElement('div');
        div.className = 'summary-item';
        const statusSpan = document.createElement('span');
        statusSpan.className = 's-status';
        if (isCorrect) {
            statusSpan.textContent = '✓';
            statusSpan.classList.add('done');
        } else if (sel) {
            statusSpan.textContent = '✗';
            statusSpan.classList.add('wrong');
        } else {
            statusSpan.textContent = '—';
            statusSpan.classList.add('miss');
        }
        div.innerHTML = `
                    <span class="s-idx">${q.id}</span>
                    <span class="s-answer ${sel ? '' : 'empty'}">${sel || '未选'}</span>
                `;
        div.appendChild(statusSpan);
        div.addEventListener('click', () => {
            hideSummary();
            goTo(idx);
        });
        summaryGrid.appendChild(div);
    });

    progressText.textContent = `📊 汇总 · 正确 ${correctCount}/${total}`;
    saveState();
}

function hideSummary() {
    inSummary = false;
    summaryContainer.classList.remove('visible');
    questionArea.style.display = 'block';
    document.querySelector('.nav-area').style.display = 'flex';
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('resetBtn').style.display = 'block';
    renderQuestion(currentIndex);
    updateProgressText();
    saveState();
}

submitBtn.addEventListener('click', showSummary);
backBtn.addEventListener('click', hideSummary);

// ============================================================
//  10. 重置
// ============================================================
resetBtn.addEventListener('click', () => {
    if (inSummary) return;
    if (confirm('确定要重置所有作答记录吗？')) {
        selections.fill(null);
        answeredCorrect.fill(false);
        isErrorState.fill(false);
        currentIndex = 0;
        renderQuestion(currentIndex);
        updateProgressText();
        clearState();
        saveState();
    }
});

// ============================================================
//  11. 初始化
// ============================================================
function init() {
    const loaded = loadState();
    if (loaded) {
        inSummary = false;
        summaryContainer.classList.remove('visible');
        questionArea.style.display = 'block';
        document.querySelector('.nav-area').style.display = 'flex';
        document.getElementById('submitBtn').style.display = 'block';
        document.getElementById('resetBtn').style.display = 'block';
        renderQuestion(currentIndex);
        updateProgressText();
        console.log('已恢复上次进度');
    } else {
        renderQuestion(0);
    }
}

init();
console.log(`✅ 已加载 ${total} 道题目，答案已嵌入，支持进度保存`);
