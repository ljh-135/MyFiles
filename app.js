class QuizApp {
    constructor() {
        this.questions = QUESTIONS;
        this.filteredQuestions = [];
        this.currentIndex = 0;
        this.currentFilter = 'all';
        this.selectedAnswer = null;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.isAnswered = false;
        this.answerRecords = {};

        this.initElements();
        this.bindEvents();
        this.filterQuestions('all');

        // =====  🆕 页面加载后显示公告弹窗  =====
        this.showAnnouncement();
    }

    // ============================================================
    //  初始化 DOM 元素
    // ============================================================
    initElements() {
        this.elements = {
            questionCard: document.getElementById('questionCard'),
            questionNum: document.getElementById('questionNum'),
            questionType: document.getElementById('questionType'),
            questionContent: document.getElementById('questionContent'),
            questionOptions: document.getElementById('questionOptions'),
            resultArea: document.getElementById('resultArea'),
            resultIcon: document.getElementById('resultIcon'),
            resultText: document.getElementById('resultText'),
            explanation: document.getElementById('explanation'),
            prevBtn: document.getElementById('prevBtn'),
            submitBtn: document.getElementById('submitBtn'),
            nextBtn: document.getElementById('nextBtn'),
            progressFill: document.getElementById('progressFill'),
            progressText: document.getElementById('progressText'),
            completePage: document.getElementById('completePage'),
            totalQuestions: document.getElementById('totalQuestions'),
            finalCorrect: document.getElementById('finalCorrect'),
            accuracy: document.getElementById('accuracy'),
            restartBtn: document.getElementById('restartBtn'),
            statBtn: document.getElementById('statBtn'),
            statModal: document.getElementById('statModal'),
            statClose: document.getElementById('statClose'),
            statCorrect: document.getElementById('statCorrect'),
            statWrong: document.getElementById('statWrong'),
            statSkipped: document.getElementById('statSkipped'),
            statList: document.getElementById('statList'),
            clearBtn: document.getElementById('clearBtn'),
            // =====  🆕 公告弹窗元素  =====
            announcementModal: document.getElementById('announcementModal'),
            announcementCloseBtn: document.getElementById('announcementCloseBtn'),
        };
    }

    // ============================================================
    //  绑定事件
    // ============================================================
    bindEvents() {
        // 类型切换
        document.querySelectorAll('.tab-btn').forEach((btn) => {
            btn.addEventListener('click', () =>
                this.filterQuestions(btn.dataset.type)
            );
        });

        // 题目操作
        this.elements.prevBtn.addEventListener('click', () =>
            this.prevQuestion()
        );
        this.elements.submitBtn.addEventListener('click', () =>
            this.submitAnswer()
        );
        this.elements.nextBtn.addEventListener('click', () =>
            this.nextQuestion()
        );
        this.elements.restartBtn.addEventListener('click', () =>
            this.restart()
        );

        // 统计弹窗
        this.elements.statBtn.addEventListener('click', () =>
            this.showStat()
        );
        this.elements.statClose.addEventListener('click', () =>
            this.hideStat()
        );
        this.elements.statModal.addEventListener('click', (e) => {
            if (e.target === this.elements.statModal) {
                this.hideStat();
            }
        });
        this.elements.clearBtn.addEventListener('click', () =>
            this.clearRecords()
        );

        // =====  🆕 公告弹窗事件  =====
        // 点击「我知道了」关闭
        this.elements.announcementCloseBtn.addEventListener('click', () =>
            this.closeAnnouncement()
        );
        // 点击遮罩关闭
        this.elements.announcementModal.addEventListener('click', (e) => {
            if (e.target === this.elements.announcementModal) {
                this.closeAnnouncement();
            }
        });
        // 按 ESC 键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = this.elements.announcementModal;
                if (modal && !modal.classList.contains('hidden')) {
                    this.closeAnnouncement();
                }
            }
        });
    }

    // ============================================================
    //  题目筛选
    // ============================================================
    filterQuestions(type) {
        this.currentFilter = type;
        this.currentIndex = 0;
        this.selectedAnswer = null;
        this.isAnswered = false;

        document.querySelectorAll('.tab-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.type === type);
        });

        this.filteredQuestions =
            type === 'all'
                ? [...this.questions]
                : this.questions.filter((q) => q.type === type);

        if (this.filteredQuestions.length === 0) {
            this.showEmpty();
        } else {
            this.elements.completePage.style.display = 'none';
            this.elements.questionCard.style.display = 'block';
            this.renderQuestion();
        }
    }

    showEmpty() {
        this.elements.questionCard.style.display = 'none';
        this.elements.completePage.style.display = 'block';
        this.elements.completePage.innerHTML = `
                    <div class="complete-icon">📭</div>
                    <h2>暂无题目</h2>
                    <p class="complete-stats">当前分类没有题目</p>
                `;
    }

    // ============================================================
    //  渲染题目
    // ============================================================
    renderQuestion() {
        const q = this.filteredQuestions[this.currentIndex];
        const record = this.answerRecords[q.id];

        this.elements.questionNum.textContent = `第${this.currentIndex + 1}题`;
        this.elements.questionType.textContent =
            q.type === 'choice' ? '选择题' : '填空题';
        this.elements.questionContent.textContent = q.question;

        this.elements.questionOptions.innerHTML = '';
        this.elements.resultArea.style.display = 'none';
        this.selectedAnswer = null;
        this.isAnswered = false;

        // 如果已有记录，回显结果
        if (record) {
            this.isAnswered = true;
            this.selectedAnswer = record.userAnswer;
            this.elements.resultArea.style.display = 'block';
            this.elements.resultArea.className = `result-area ${record.isCorrect ? 'correct' : 'wrong'}`;
            this.elements.resultIcon.textContent = record.isCorrect ? '✅' : '❌';
            this.elements.resultText.textContent = record.isCorrect
                ? '回答正确！'
                : '回答错误';
            this.elements.explanation.textContent = q.explanation;
        }

        this.updateButtons();
        this.updateProgress();

        if (q.type === 'choice') {
            this.renderChoiceOptions(q.options, record);
        } else {
            this.renderFillInput(record);
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    renderChoiceOptions(options, record) {
        const letters = ['A', 'B', 'C', 'D'];
        options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${opt}`;

            if (record) {
                btn.disabled = true;
                const letter = letters[i];
                if (letter === record.correctAnswer) {
                    btn.classList.add('correct');
                } else if (record.userAnswer === letter && !record.isCorrect) {
                    btn.classList.add('wrong');
                }
            } else {
                btn.addEventListener('click', () =>
                    this.selectOption(btn, letters[i])
                );
            }

            this.elements.questionOptions.appendChild(btn);
        });
    }

    renderFillInput(record) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input';
        input.placeholder = '请输入答案';

        if (record) {
            input.value = record.userAnswer;
            input.disabled = true;
        } else {
            input.addEventListener('input', (e) => {
                this.selectedAnswer = e.target.value;
                this.updateButtons();
            });
        }

        this.elements.questionOptions.appendChild(input);
    }

    selectOption(btn, letter) {
        if (this.isAnswered) return;

        document.querySelectorAll('.option-btn').forEach((b) =>
            b.classList.remove('selected')
        );
        btn.classList.add('selected');
        this.selectedAnswer = letter;
        this.updateButtons();
    }

    // ============================================================
    //  按钮状态 & 进度
    // ============================================================
    updateButtons() {
        this.elements.prevBtn.disabled = this.currentIndex === 0;
        this.elements.nextBtn.disabled =
            this.currentIndex === this.filteredQuestions.length - 1;

        const hasAnswer =
            this.selectedAnswer !== null && this.selectedAnswer.trim() !== '';
        this.elements.submitBtn.disabled = !hasAnswer || this.isAnswered;
    }

    updateProgress() {
        const total = this.filteredQuestions.length;
        const progress = total > 0 ? (this.currentIndex / total) * 100 : 0;
        this.elements.progressFill.style.width = `${progress}%`;
        this.elements.progressText.textContent = `${this.currentIndex} / ${total}`;
    }

    // ============================================================
    //  提交答案
    // ============================================================
    submitAnswer() {
        if (this.isAnswered || !this.selectedAnswer) return;

        const q = this.filteredQuestions[this.currentIndex];
        const userAnswer = this.selectedAnswer.trim();
        let isCorrect;

        if (q.type === 'choice') {
            isCorrect = userAnswer.toUpperCase() === q.answer.toUpperCase();
        } else {
            isCorrect = userAnswer === q.answer;
        }

        this.answerRecords[q.id] = {
            isCorrect: isCorrect,
            userAnswer: userAnswer,
            correctAnswer: q.answer,
        };

        this.showResult({
            isCorrect: isCorrect,
            correctAnswer: q.answer,
            explanation: q.explanation,
        });
    }

    showResult(result) {
        this.isAnswered = true;
        const isCorrect = result.isCorrect;
        const q = this.filteredQuestions[this.currentIndex];

        if (isCorrect) {
            this.correctCount++;
        } else {
            this.wrongCount++;
        }

        // 选择题正确时自动跳转（带延迟）
        if (q.type === 'choice' && isCorrect) {
            this.highlightOptions(result.correctAnswer);
            this.updateButtons();
            setTimeout(() => {
                if (this.currentIndex < this.filteredQuestions.length - 1) {
                    this.nextQuestion();
                } else {
                    this.showComplete();
                }
            }, 400);
            return;
        }

        this.elements.resultArea.style.display = 'block';
        this.elements.resultArea.className = `result-area ${isCorrect ? 'correct' : 'wrong'}`;
        this.elements.resultIcon.textContent = isCorrect ? '✅' : '❌';
        this.elements.resultText.textContent = isCorrect
            ? '回答正确！'
            : '回答错误';
        this.elements.explanation.textContent = result.explanation;

        if (q.type === 'choice') {
            this.highlightOptions(result.correctAnswer);
        }

        this.updateButtons();

        if (this.currentIndex === this.filteredQuestions.length - 1) {
            this.elements.nextBtn.textContent = '查看结果';
        }
    }

    highlightOptions(correctAnswer) {
        document.querySelectorAll('.option-btn').forEach((btn) => {
            btn.disabled = true;
            const letter = btn.querySelector('.option-letter').textContent;
            if (letter === correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected') && letter !== correctAnswer) {
                btn.classList.add('wrong');
            }
        });
    }

    // ============================================================
    //  上下题 & 完成
    // ============================================================
    nextQuestion() {
        if (this.currentIndex < this.filteredQuestions.length - 1) {
            this.currentIndex++;
            this.elements.nextBtn.textContent = '下一题';
            this.renderQuestion();
        } else {
            this.showComplete();
        }
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.elements.nextBtn.textContent = '下一题';
            this.renderQuestion();
        }
    }

    showComplete() {
        this.elements.questionCard.style.display = 'none';
        this.elements.completePage.style.display = 'block';

        const total = this.filteredQuestions.length;
        let answeredCorrect = 0;
        this.filteredQuestions.forEach((q) => {
            if (this.answerRecords[q.id]?.isCorrect) {
                answeredCorrect++;
            }
        });

        const accuracy =
            total > 0 ? Math.round((answeredCorrect / total) * 100) : 0;

        this.elements.totalQuestions.textContent = total;
        this.elements.finalCorrect.textContent = answeredCorrect;
        this.elements.accuracy.textContent = `${accuracy}%`;

        this.elements.progressFill.style.width = '100%';
        this.elements.progressText.textContent = `${total} / ${total}`;
    }

    // ============================================================
    //  统计弹窗
    // ============================================================
    showStat() {
        const total = this.filteredQuestions.length;
        let correct = 0;
        let wrong = 0;

        this.filteredQuestions.forEach((q) => {
            const record = this.answerRecords[q.id];
            if (record) {
                if (record.isCorrect) correct++;
                else wrong++;
            }
        });

        const skipped = total - correct - wrong;

        this.elements.statCorrect.textContent = correct;
        this.elements.statWrong.textContent = wrong;
        this.elements.statSkipped.textContent = skipped;

        this.elements.statList.innerHTML = '';
        this.filteredQuestions.forEach((q, i) => {
            const record = this.answerRecords[q.id];
            const item = document.createElement('div');
            let statusClass = 'skipped';
            let statusText = '未答';

            if (record) {
                if (record.isCorrect) {
                    statusClass = 'correct';
                    statusText = '正确';
                } else {
                    statusClass = 'wrong';
                    statusText = '错误';
                }
            }

            item.className = `stat-item ${statusClass}`;
            const preview = q.question.replace(/\n/g, ' ').substring(0, 30);
            item.innerHTML = `
                        <span class="stat-item-num">${i + 1}</span>
                        <span class="stat-item-text">${preview}...</span>
                        <span class="stat-item-status">${statusText}</span>
                    `;
            item.addEventListener('click', () => {
                this.currentIndex = i;
                this.hideStat();
                this.elements.completePage.style.display = 'none';
                this.elements.questionCard.style.display = 'block';
                this.renderQuestion();
            });
            this.elements.statList.appendChild(item);
        });

        this.elements.statModal.style.display = 'flex';
    }

    hideStat() {
        this.elements.statModal.style.display = 'none';
    }

    clearRecords() {
        if (!confirm('确定要清空所有答题记录吗？')) return;
        this.answerRecords = {};
        this.correctCount = 0;
        this.wrongCount = 0;
        this.currentIndex = 0;
        this.hideStat();
        this.elements.completePage.style.display = 'none';
        this.elements.questionCard.style.display = 'block';
        this.renderQuestion();
    }

    // ============================================================
    //  重新开始
    // ============================================================
    restart() {
        this.currentIndex = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.selectedAnswer = null;
        this.isAnswered = false;
        this.answerRecords = {};

        this.elements.nextBtn.textContent = '下一题';

        this.filterQuestions(this.currentFilter);
    }

    showError(msg) {
        this.elements.questionContent.textContent = msg;
    }

    // ============================================================
    //  🆕 公告弹窗控制
    // ============================================================
    showAnnouncement() {
        const modal = this.elements.announcementModal;
        // 移除隐藏类，显示弹窗
        modal.classList.remove('hidden');
        // 确保 display 为 flex（覆盖可能的内联样式）
        modal.style.display = 'flex';
        // 禁用页面滚动
        document.body.style.overflow = 'hidden';
    }

    closeAnnouncement() {
        const modal = this.elements.announcementModal;
        // 添加隐藏类触发淡出动画
        modal.classList.add('hidden');
        // 动画结束后完全隐藏并恢复滚动
        const onTransitionEnd = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            modal.removeEventListener('transitionend', onTransitionEnd);
        };
        modal.addEventListener('transitionend', onTransitionEnd);
        // 兜底：如果动画未触发，0.5s 后强制隐藏
        setTimeout(() => {
            if (modal.style.display !== 'none') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        }, 500);
    }
}

// ============================================================
//  启动应用
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});