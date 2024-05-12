/************* 
 * Test *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'test';  // from the Builder filename that created this script
let expInfo = {
    'participant': 'name',
    'age': '',
    'sex（m/f）': '',
    '用过chatgpt吗（y/n）': '',
    '对chatgpt的信任度（0-10）': '',
    '对自己做出的决策信心（0-10）': 'or坚定程度',
    'session（不用填）': '01',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(preRoutineBegin());
flowScheduler.add(preRoutineEachFrame());
flowScheduler.add(preRoutineEnd());
flowScheduler.add(gapRoutineBegin());
flowScheduler.add(gapRoutineEachFrame());
flowScheduler.add(gapRoutineEnd());
flowScheduler.add(pretestRoutineBegin());
flowScheduler.add(pretestRoutineEachFrame());
flowScheduler.add(pretestRoutineEnd());
flowScheduler.add(pretest2RoutineBegin());
flowScheduler.add(pretest2RoutineEachFrame());
flowScheduler.add(pretest2RoutineEnd());
flowScheduler.add(pre_finishRoutineBegin());
flowScheduler.add(pre_finishRoutineEachFrame());
flowScheduler.add(pre_finishRoutineEnd());
flowScheduler.add(tipsRoutineBegin());
flowScheduler.add(tipsRoutineEachFrame());
flowScheduler.add(tipsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);




flowScheduler.add(restRoutineBegin());
flowScheduler.add(restRoutineEachFrame());
flowScheduler.add(restRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);




flowScheduler.add(rest_2RoutineBegin());
flowScheduler.add(rest_2RoutineEachFrame());
flowScheduler.add(rest_2RoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);




flowScheduler.add(rest_3RoutineBegin());
flowScheduler.add(rest_3RoutineEachFrame());
flowScheduler.add(rest_3RoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);




flowScheduler.add(rest_4RoutineBegin());
flowScheduler.add(rest_4RoutineEachFrame());
flowScheduler.add(rest_4RoutineEnd());
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);




flowScheduler.add(routine_3RoutineBegin());
flowScheduler.add(routine_3RoutineEachFrame());
flowScheduler.add(routine_3RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'loop1.xlsx', 'path': 'loop1.xlsx'},
    {'name': 'pic/zu1/a1.png', 'path': 'pic/zu1/a1.png'},
    {'name': 'pic/zu1/c3.png', 'path': 'pic/zu1/c3.png'},
    {'name': 'pic/zu1/b6.png', 'path': 'pic/zu1/b6.png'},
    {'name': 'pic/zu1/c1.jpg', 'path': 'pic/zu1/c1.jpg'},
    {'name': 'pic/zu1/a3.png', 'path': 'pic/zu1/a3.png'},
    {'name': 'pic/zu1/b4.jpg', 'path': 'pic/zu1/b4.jpg'},
    {'name': 'loop2.xlsx', 'path': 'loop2.xlsx'},
    {'name': 'pic/zu2/c9.png', 'path': 'pic/zu2/c9.png'},
    {'name': 'pic/zu2/a5.png', 'path': 'pic/zu2/a5.png'},
    {'name': 'pic/zu2/b2.jpg', 'path': 'pic/zu2/b2.jpg'},
    {'name': 'pic/zu2/a10.jpg', 'path': 'pic/zu2/a10.jpg'},
    {'name': 'pic/zu2/b1.png', 'path': 'pic/zu2/b1.png'},
    {'name': 'pic/zu2/c10.png', 'path': 'pic/zu2/c10.png'},
    {'name': 'loop3.xlsx', 'path': 'loop3.xlsx'},
    {'name': 'pic/zu3/a4.png', 'path': 'pic/zu3/a4.png'},
    {'name': 'pic/zu3/b3.png', 'path': 'pic/zu3/b3.png'},
    {'name': 'pic/zu3/c6.png', 'path': 'pic/zu3/c6.png'},
    {'name': 'pic/zu3/b9.png', 'path': 'pic/zu3/b9.png'},
    {'name': 'pic/zu3/a8.png', 'path': 'pic/zu3/a8.png'},
    {'name': 'pic/zu3/c4.png', 'path': 'pic/zu3/c4.png'},
    {'name': 'loop4.xlsx', 'path': 'loop4.xlsx'},
    {'name': 'pic/zu4/a6.png', 'path': 'pic/zu4/a6.png'},
    {'name': 'pic/zu4/c2.png', 'path': 'pic/zu4/c2.png'},
    {'name': 'pic/zu4/c5.png', 'path': 'pic/zu4/c5.png'},
    {'name': 'pic/zu4/b7.jpg', 'path': 'pic/zu4/b7.jpg'},
    {'name': 'pic/zu4/a9.jpg', 'path': 'pic/zu4/a9.jpg'},
    {'name': 'pic/zu4/b5.jpg', 'path': 'pic/zu4/b5.jpg'},
    {'name': 'loop5.xlsx', 'path': 'loop5.xlsx'},
    {'name': 'pic/zu5/c7.png', 'path': 'pic/zu5/c7.png'},
    {'name': 'pic/zu5/a2.png', 'path': 'pic/zu5/a2.png'},
    {'name': 'pic/zu5/b10.png', 'path': 'pic/zu5/b10.png'},
    {'name': 'pic/zu5/a7.jpg', 'path': 'pic/zu5/a7.jpg'},
    {'name': 'pic/zu5/b8.png', 'path': 'pic/zu5/b8.png'},
    {'name': 'pic/zu5/c8.png', 'path': 'pic/zu5/c8.png'},
    {'name': 'pic/Fixation.jpg', 'path': 'pic/Fixation.jpg'},
    {'name': 'pic/pre/图片 1.jpg', 'path': 'pic/pre/图片 1.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var text_2;
var button;
var preClock;
var text;
var gapClock;
var image;
var pretestClock;
var test1_1;
var choice;
var chat;
var questio;
var corret;
var chatgpt;
var correct_radio;
var tips_2;
var button_2;
var pretest2Clock;
var test1;
var question;
var AI;
var choice_2;
var choice2_2;
var correct;
var correct_radio_2;
var xinxin1;
var xinxin2;
var yilai1;
var yilai2;
var xinren;
var xinren2;
var tips_3;
var button_3;
var pre_finishClock;
var text_3;
var button_4;
var tipsClock;
var text_7;
var zu1Clock;
var test1_2;
var choice_3;
var chat_2;
var questio_2;
var corret_2;
var chatgpt_2;
var correct_radio_3;
var tips_4;
var button_5;
var zu1_1Clock;
var test1_3;
var question_2;
var AI_2;
var choice_4;
var choice2_4;
var correct_2;
var correct_radio_4;
var xinxin1_2;
var xinxin2_2;
var yilai1_2;
var yilai2_2;
var xinren_2;
var xinren2_2;
var tips_5;
var button_6;
var restClock;
var text_4;
var zu2Clock;
var test1_4;
var choice_7;
var chat_3;
var questio_3;
var corret_3;
var chatgpt_3;
var correct_radio_5;
var tips_6;
var button_9;
var zu2_1Clock;
var test1_5;
var question_3;
var AI_3;
var choice_5;
var choice2;
var correct_3;
var correct_radio_6;
var xinxin1_3;
var xinxin2_3;
var yilai1_3;
var yilai2_3;
var xinren_3;
var xinren2_3;
var tips_7;
var button_7;
var rest_2Clock;
var text_5;
var zu3Clock;
var test1_6;
var choice_8;
var chat_4;
var questio_4;
var corret_4;
var chatgpt_4;
var correct_radio_7;
var tips_8;
var button_10;
var zu3_1Clock;
var test1_7;
var question_4;
var AI_4;
var choice_6;
var choice2_3;
var correct_4;
var correct_radio_8;
var xinxin1_4;
var xinxin2_4;
var yilai1_4;
var yilai2_4;
var xinren_4;
var xinren2_4;
var tips_9;
var button_8;
var rest_3Clock;
var text_8;
var zu4Clock;
var test1_8;
var choice_9;
var chat_5;
var questio_5;
var corret_5;
var chatgpt_5;
var correct_radio_9;
var tips_10;
var button_11;
var zu4_1Clock;
var test1_9;
var question_5;
var AI_5;
var choice_10;
var choice2_5;
var correct_5;
var correct_radio_10;
var xinxin1_5;
var xinxin2_5;
var yilai1_5;
var yilai2_5;
var xinren_5;
var xinren2_5;
var tips_11;
var button_12;
var rest_4Clock;
var text_9;
var zu5Clock;
var test1_10;
var choice_11;
var chat_6;
var questio_6;
var corret_6;
var chatgpt_6;
var correct_radio_11;
var tips_12;
var button_13;
var zu5_1Clock;
var test1_11;
var question_6;
var AI_6;
var choice_12;
var choice2_6;
var correct_6;
var correct_radio_12;
var xinxin1_6;
var xinxin2_6;
var yilai1_6;
var yilai2_6;
var xinren_6;
var xinren2_6;
var tips_13;
var button_14;
var routine_3Clock;
var text_6;
var key_resp_10;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '欢迎参与实验\n将呈现一些任务\n你需要先选择自己的答案\n然后参考AI的答案，再得到最终答案\n【注意】AI答案不一定完全正确。\n【实验前提】提高决策准确率及效率\n\n接下来有1个预实验帮助理解这个实验。\n\n现在，请点击"下一页"进入预实验',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.57, (- 0.45)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -1
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "pre"
  preClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '预实验\n\n【提示】由于鼠标被记录了点击时间和点击历史，\n请保持答题的连续性和专注',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "gap"
  gapClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'pic/Fixation.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "pretest"
  pretestClock = new util.Clock();
  test1_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_1', units : 'height', 
    image : 'pic/pre/图片 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  choice = new visual.Slider({
    win: psychoJS.window, name: 'choice',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, 0.1], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  chat = new visual.Slider({
    win: psychoJS.window, name: 'chat',
    startValue: undefined,
    size: [0.54, 0.05], pos: [(- 0.2), (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: ["yes", "no"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  questio = new visual.TextStim({
    win: psychoJS.window,
    name: 'questio',
    text: '(预实验)1-请你描述图中猫的颜色品种:\na.中华田园狸花猫\nb.银虎斑美短\nc.金棕色虎斑暹罗\nd.金棕色孟加拉豹猫',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.035,  wrapWidth: 0.1, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  corret = new visual.TextStim({
    win: psychoJS.window,
    name: 'corret',
    text: '2-你认为你的答案的正确率：(低-高)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.32), (- 0.01)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  chatgpt = new visual.TextStim({
    win: psychoJS.window,
    name: 'chatgpt',
    text: '3-这个问题你会选择参考AI(chatgpt)给的答案吗:(是/否)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.18), (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio',
    startValue: undefined,
    size: [0.7, 0.05], pos: [(- 0.2), (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  tips_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_2',
    text: '这页答3题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0.57, (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -7.0 
  });
  
  button_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_2',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.57, (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -8
  });
  button_2.clock = new util.Clock();
  
  // Initialize components for Routine "pretest2"
  pretest2Clock = new util.Clock();
  test1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1', units : 'height', 
    image : 'pic/pre/图片 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  question = new visual.TextStim({
    win: psychoJS.window,
    name: 'question',
    text: '(预实验)请你描述图中猫的颜色品种:\na.中华田园狸花猫\nb.银虎斑美短\nc.金棕色虎斑暹罗\nd.金棕色孟加拉豹猫',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.035,  wrapWidth: 0.1, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  AI = new visual.TextStim({
    win: psychoJS.window,
    name: 'AI',
    text: 'AI的回答是：a.中华田园狸花猫(【不准确率】:0.02%)',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.09], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -2.0 
  });
  
  choice_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_2',
    text: '4-你最终的回答是：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  choice2_2 = new visual.Slider({
    win: psychoJS.window, name: 'choice2_2',
    startValue: undefined,
    size: [0.4, 0.05], pos: [(- 0.35), (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  correct = new visual.TextStim({
    win: psychoJS.window,
    name: 'correct',
    text: '5-你认为你的答案的正确率：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_2 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_2',
    startValue: undefined,
    size: [0.45, 0.05], pos: [(- 0.35), (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  xinxin1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinxin1',
    text: '6-你对此AI的回答的信心程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  xinxin2 = new visual.Slider({
    win: psychoJS.window, name: 'xinxin2',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  yilai1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yilai1',
    text: '7-你对此AI的回答的依赖程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  yilai2 = new visual.Slider({
    win: psychoJS.window, name: 'yilai2',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  xinren = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinren',
    text: '8-你信任此AI报告(不)准确率：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  xinren2 = new visual.Slider({
    win: psychoJS.window, name: 'xinren2',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  tips_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_3',
    text: '这页答5题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.57), (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -13.0 
  });
  
  button_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_3',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.57), (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -14
  });
  button_3.clock = new util.Clock();
  
  // Initialize components for Routine "pre_finish"
  pre_finishClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '预实验结束\n\n现在开始正式实验吧！\n\n如有困惑可以暂停咨询！',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_4',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.57, (- 0.45)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -1
  });
  button_4.clock = new util.Clock();
  
  // Initialize components for Routine "tips"
  tipsClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '一共有五组\n\n每组共6个任务\n\n每个任务有8小题\n\n【无法回到上一页】，每页请谨慎作答～\n\n【按键被记录点击时间和历史】\n请保持答题的连续性和专注～\n\n接下来进入第一组～\n',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "zu1"
  zu1Clock = new util.Clock();
  test1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_2', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  choice_3 = new visual.Slider({
    win: psychoJS.window, name: 'choice_3',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, 0.1], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  chat_2 = new visual.Slider({
    win: psychoJS.window, name: 'chat_2',
    startValue: undefined,
    size: [0.54, 0.05], pos: [(- 0.2), (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: ["yes", "no"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  questio_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questio_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  corret_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'corret_2',
    text: '2-你认为你的答案的正确率：(低-高)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.32), (- 0.01)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  chatgpt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chatgpt_2',
    text: '3-这个问题你会选择参考AI(chatgpt)给的答案吗:(是/否)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.18), (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_3 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_3',
    startValue: undefined,
    size: [0.7, 0.05], pos: [(- 0.2), (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  tips_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_4',
    text: '这页答3题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0.57, (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -7.0 
  });
  
  button_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_5',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.57, (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -8
  });
  button_5.clock = new util.Clock();
  
  // Initialize components for Routine "zu1_1"
  zu1_1Clock = new util.Clock();
  test1_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_3', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  question_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  AI_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AI_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.09], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -2.0 
  });
  
  choice_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_4',
    text: '4-你最终的回答是：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  choice2_4 = new visual.Slider({
    win: psychoJS.window, name: 'choice2_4',
    startValue: undefined,
    size: [0.4, 0.05], pos: [(- 0.35), (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  correct_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'correct_2',
    text: '5-你认为你的答案的正确率：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_4 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_4',
    startValue: undefined,
    size: [0.45, 0.05], pos: [(- 0.35), (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  xinxin1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinxin1_2',
    text: '6-你对此AI的回答的信心程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  xinxin2_2 = new visual.Slider({
    win: psychoJS.window, name: 'xinxin2_2',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  yilai1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yilai1_2',
    text: '7-你对此AI的回答的依赖程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  yilai2_2 = new visual.Slider({
    win: psychoJS.window, name: 'yilai2_2',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  xinren_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinren_2',
    text: '8-你信任此AI报告(不)准确率：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  xinren2_2 = new visual.Slider({
    win: psychoJS.window, name: 'xinren2_2',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  tips_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_5',
    text: '这页答5题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.57), (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -13.0 
  });
  
  button_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_6',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.57), (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -14
  });
  button_6.clock = new util.Clock();
  
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '已经完成（1/5）\n\n请稍事休息双眼\n\n7s后，自动进入第二组',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "zu2"
  zu2Clock = new util.Clock();
  test1_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_4', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  choice_7 = new visual.Slider({
    win: psychoJS.window, name: 'choice_7',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, 0.1], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  chat_3 = new visual.Slider({
    win: psychoJS.window, name: 'chat_3',
    startValue: undefined,
    size: [0.54, 0.05], pos: [(- 0.2), (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: ["yes", "no"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  questio_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questio_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  corret_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'corret_3',
    text: '2-你认为你的答案的正确率：(低-高)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.32), (- 0.01)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  chatgpt_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chatgpt_3',
    text: '3-这个问题你会选择参考AI(chatgpt)给的答案吗:(是/否)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.18), (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_5 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_5',
    startValue: undefined,
    size: [0.7, 0.05], pos: [(- 0.2), (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  tips_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_6',
    text: '这页答3题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0.57, (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -7.0 
  });
  
  button_9 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_9',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.57, (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -8
  });
  button_9.clock = new util.Clock();
  
  // Initialize components for Routine "zu2_1"
  zu2_1Clock = new util.Clock();
  test1_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_5', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  question_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  AI_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AI_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.09], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -2.0 
  });
  
  choice_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_5',
    text: '4-你最终的回答是：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  choice2 = new visual.Slider({
    win: psychoJS.window, name: 'choice2',
    startValue: undefined,
    size: [0.4, 0.05], pos: [(- 0.35), (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  correct_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'correct_3',
    text: '5-你认为你的答案的正确率：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_6 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_6',
    startValue: undefined,
    size: [0.45, 0.05], pos: [(- 0.35), (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  xinxin1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinxin1_3',
    text: '6-你对此AI的回答的信心程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  xinxin2_3 = new visual.Slider({
    win: psychoJS.window, name: 'xinxin2_3',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  yilai1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yilai1_3',
    text: '7-你对此AI的回答的依赖程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  yilai2_3 = new visual.Slider({
    win: psychoJS.window, name: 'yilai2_3',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  xinren_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinren_3',
    text: '8-你信任此AI报告(不)准确率：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  xinren2_3 = new visual.Slider({
    win: psychoJS.window, name: 'xinren2_3',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  tips_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_7',
    text: '这页答5题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.57), (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -13.0 
  });
  
  button_7 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_7',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.57), (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -14
  });
  button_7.clock = new util.Clock();
  
  // Initialize components for Routine "rest_2"
  rest_2Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '已经完成（2/5）\n\n请稍事休息双眼\n\n7s后，自动进入第三组',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "zu3"
  zu3Clock = new util.Clock();
  test1_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_6', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  choice_8 = new visual.Slider({
    win: psychoJS.window, name: 'choice_8',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, 0.1], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  chat_4 = new visual.Slider({
    win: psychoJS.window, name: 'chat_4',
    startValue: undefined,
    size: [0.54, 0.05], pos: [(- 0.2), (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: ["yes", "no"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  questio_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questio_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  corret_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'corret_4',
    text: '2-你认为你的答案的正确率：(低-高)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.32), (- 0.01)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  chatgpt_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chatgpt_4',
    text: '3-这个问题你会选择参考AI(chatgpt)给的答案吗:(是/否)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.18), (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_7 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_7',
    startValue: undefined,
    size: [0.7, 0.05], pos: [(- 0.2), (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  tips_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_8',
    text: '这页答3题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0.57, (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -7.0 
  });
  
  button_10 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_10',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.57, (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -8
  });
  button_10.clock = new util.Clock();
  
  // Initialize components for Routine "zu3_1"
  zu3_1Clock = new util.Clock();
  test1_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_7', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  question_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  AI_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AI_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.09], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -2.0 
  });
  
  choice_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_6',
    text: '4-你最终的回答是：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  choice2_3 = new visual.Slider({
    win: psychoJS.window, name: 'choice2_3',
    startValue: undefined,
    size: [0.4, 0.05], pos: [(- 0.35), (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  correct_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'correct_4',
    text: '5-你认为你的答案的正确率：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_8 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_8',
    startValue: undefined,
    size: [0.45, 0.05], pos: [(- 0.35), (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  xinxin1_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinxin1_4',
    text: '6-你对此AI的回答的信心程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  xinxin2_4 = new visual.Slider({
    win: psychoJS.window, name: 'xinxin2_4',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  yilai1_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yilai1_4',
    text: '7-你对此AI的回答的依赖程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  yilai2_4 = new visual.Slider({
    win: psychoJS.window, name: 'yilai2_4',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  xinren_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinren_4',
    text: '8-你信任此AI报告(不)准确率：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  xinren2_4 = new visual.Slider({
    win: psychoJS.window, name: 'xinren2_4',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  tips_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_9',
    text: '这页答5题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.57), (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -13.0 
  });
  
  button_8 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_8',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.57), (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -14
  });
  button_8.clock = new util.Clock();
  
  // Initialize components for Routine "rest_3"
  rest_3Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '已经完成（3/5）\n\n请稍事休息双眼\n\n7s后，自动进入第四组',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "zu4"
  zu4Clock = new util.Clock();
  test1_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_8', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  choice_9 = new visual.Slider({
    win: psychoJS.window, name: 'choice_9',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, 0.1], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  chat_5 = new visual.Slider({
    win: psychoJS.window, name: 'chat_5',
    startValue: undefined,
    size: [0.54, 0.05], pos: [(- 0.2), (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: ["yes", "no"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  questio_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questio_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  corret_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'corret_5',
    text: '2-你认为你的答案的正确率：(低-高)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.32), (- 0.01)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  chatgpt_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chatgpt_5',
    text: '3-这个问题你会选择参考AI(chatgpt)给的答案吗:(是/否)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.18), (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_9 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_9',
    startValue: undefined,
    size: [0.7, 0.05], pos: [(- 0.2), (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  tips_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_10',
    text: '这页答3题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0.57, (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -7.0 
  });
  
  button_11 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_11',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.57, (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -8
  });
  button_11.clock = new util.Clock();
  
  // Initialize components for Routine "zu4_1"
  zu4_1Clock = new util.Clock();
  test1_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_9', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  question_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  AI_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AI_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.09], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -2.0 
  });
  
  choice_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_10',
    text: '4-你最终的回答是：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  choice2_5 = new visual.Slider({
    win: psychoJS.window, name: 'choice2_5',
    startValue: undefined,
    size: [0.4, 0.05], pos: [(- 0.35), (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  correct_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'correct_5',
    text: '5-你认为你的答案的正确率：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_10 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_10',
    startValue: undefined,
    size: [0.45, 0.05], pos: [(- 0.35), (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  xinxin1_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinxin1_5',
    text: '6-你对此AI的回答的信心程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  xinxin2_5 = new visual.Slider({
    win: psychoJS.window, name: 'xinxin2_5',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  yilai1_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yilai1_5',
    text: '7-你对此AI的回答的依赖程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  yilai2_5 = new visual.Slider({
    win: psychoJS.window, name: 'yilai2_5',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  xinren_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinren_5',
    text: '8-你信任此AI报告(不)准确率：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  xinren2_5 = new visual.Slider({
    win: psychoJS.window, name: 'xinren2_5',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  tips_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_11',
    text: '这页答5题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.57), (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -13.0 
  });
  
  button_12 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_12',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.57), (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -14
  });
  button_12.clock = new util.Clock();
  
  // Initialize components for Routine "rest_4"
  rest_4Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '已经完成（4/5）\n\n请稍事休息双眼\n\n7s后，自动进入第五组',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "zu5"
  zu5Clock = new util.Clock();
  test1_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_10', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  choice_11 = new visual.Slider({
    win: psychoJS.window, name: 'choice_11',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, 0.1], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  chat_6 = new visual.Slider({
    win: psychoJS.window, name: 'chat_6',
    startValue: undefined,
    size: [0.54, 0.05], pos: [(- 0.2), (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: ["yes", "no"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  questio_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questio_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  corret_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'corret_6',
    text: '2-你认为你的答案的正确率：(低-高)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.32), (- 0.01)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  chatgpt_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chatgpt_6',
    text: '3-这个问题你会选择参考AI(chatgpt)给的答案吗:(是/否)',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.18), (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_11 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_11',
    startValue: undefined,
    size: [0.7, 0.05], pos: [(- 0.2), (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  tips_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_12',
    text: '这页答3题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0.57, (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -7.0 
  });
  
  button_13 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_13',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.57, (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -8
  });
  button_13.clock = new util.Clock();
  
  // Initialize components for Routine "zu5_1"
  zu5_1Clock = new util.Clock();
  test1_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_11', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  question_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.31], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  AI_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AI_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.09], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -2.0 
  });
  
  choice_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_12',
    text: '4-你最终的回答是：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  choice2_6 = new visual.Slider({
    win: psychoJS.window, name: 'choice2_6',
    startValue: undefined,
    size: [0.4, 0.05], pos: [(- 0.35), (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["a", "b", "c", "d"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  correct_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'correct_6',
    text: '5-你认为你的答案的正确率：',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  correct_radio_12 = new visual.Slider({
    win: psychoJS.window, name: 'correct_radio_12',
    startValue: undefined,
    size: [0.45, 0.05], pos: [(- 0.35), (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('blue'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  xinxin1_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinxin1_6',
    text: '6-你对此AI的回答的信心程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  xinxin2_6 = new visual.Slider({
    win: psychoJS.window, name: 'xinxin2_6',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  yilai1_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yilai1_6',
    text: '7-你对此AI的回答的依赖程度：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.15)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  yilai2_6 = new visual.Slider({
    win: psychoJS.window, name: 'yilai2_6',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  xinren_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'xinren_6',
    text: '8-你信任此AI报告(不)准确率：(低-高)',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  xinren2_6 = new visual.Slider({
    win: psychoJS.window, name: 'xinren2_6',
    startValue: undefined,
    size: [0.5, 0.05], pos: [0.3, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.035, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  tips_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_13',
    text: '这页答5题哦',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [(- 0.57), (- 0.36)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -13.0 
  });
  
  button_14 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_14',
    text: '下一页',
    fillColor: 'blue',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.57), (- 0.44)],
    letterHeight: 0.035,
    size: [0.15, 0.08],
    depth: -14
  });
  button_14.clock = new util.Clock();
  
  // Initialize components for Routine "routine_3"
  routine_3Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '全部完成啦！非常感谢!\n请按空格键退出',
    font: 'Microsoft Yahei',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(text_2);
    introComponents.push(button);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var preComponents;
function preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre' ---
    t = 0;
    preClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('pre.started', globalClock.getTime());
    // keep track of which components have finished
    preComponents = [];
    preComponents.push(text);
    
    for (const thisComponent of preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre' ---
    // get current time
    t = preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre' ---
    for (const thisComponent of preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pre.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gapComponents;
function gapRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'gap' ---
    t = 0;
    gapClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('gap.started', globalClock.getTime());
    // keep track of which components have finished
    gapComponents = [];
    gapComponents.push(image);
    
    for (const thisComponent of gapComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gapRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'gap' ---
    // get current time
    t = gapClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of gapComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gapRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'gap' ---
    for (const thisComponent of gapComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('gap.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pretestComponents;
function pretestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pretest' ---
    t = 0;
    pretestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('pretest.started', globalClock.getTime());
    choice.reset()
    chat.reset()
    correct_radio.reset()
    // reset button_2 to account for continued clicks & clear times on/off
    button_2.reset()
    // keep track of which components have finished
    pretestComponents = [];
    pretestComponents.push(test1_1);
    pretestComponents.push(choice);
    pretestComponents.push(chat);
    pretestComponents.push(questio);
    pretestComponents.push(corret);
    pretestComponents.push(chatgpt);
    pretestComponents.push(correct_radio);
    pretestComponents.push(tips_2);
    pretestComponents.push(button_2);
    
    for (const thisComponent of pretestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pretestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pretest' ---
    // get current time
    t = pretestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_1* updates
    if (t >= 0.0 && test1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_1.tStart = t;  // (not accounting for frame time here)
      test1_1.frameNStart = frameN;  // exact frame index
      
      test1_1.setAutoDraw(true);
    }
    
    
    // *choice* updates
    if (t >= 0.0 && choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice.tStart = t;  // (not accounting for frame time here)
      choice.frameNStart = frameN;  // exact frame index
      
      choice.setAutoDraw(true);
    }
    
    
    // *chat* updates
    if (t >= 0.0 && chat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat.tStart = t;  // (not accounting for frame time here)
      chat.frameNStart = frameN;  // exact frame index
      
      chat.setAutoDraw(true);
    }
    
    
    if (questio.status === PsychoJS.Status.STARTED){ // only update if being drawn
      questio.setFont('Microsoft Yahei', false);
    }
    
    // *questio* updates
    if (t >= 0.0 && questio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questio.tStart = t;  // (not accounting for frame time here)
      questio.frameNStart = frameN;  // exact frame index
      
      questio.setAutoDraw(true);
    }
    
    
    // *corret* updates
    if (t >= 0.0 && corret.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corret.tStart = t;  // (not accounting for frame time here)
      corret.frameNStart = frameN;  // exact frame index
      
      corret.setAutoDraw(true);
    }
    
    
    // *chatgpt* updates
    if (t >= 0.0 && chatgpt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatgpt.tStart = t;  // (not accounting for frame time here)
      chatgpt.frameNStart = frameN;  // exact frame index
      
      chatgpt.setAutoDraw(true);
    }
    
    
    // *correct_radio* updates
    if (t >= 0.0 && correct_radio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio.tStart = t;  // (not accounting for frame time here)
      correct_radio.frameNStart = frameN;  // exact frame index
      
      correct_radio.setAutoDraw(true);
    }
    
    
    // *tips_2* updates
    if (t >= 0.0 && tips_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_2.tStart = t;  // (not accounting for frame time here)
      tips_2.frameNStart = frameN;  // exact frame index
      
      tips_2.setAutoDraw(true);
    }
    
    
    // *button_2* updates
    if (t >= 0 && button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_2.tStart = t;  // (not accounting for frame time here)
      button_2.frameNStart = frameN;  // exact frame index
      
      button_2.setAutoDraw(true);
    }
    
    if (button_2.status === PsychoJS.Status.STARTED) {
      // check whether button_2 has been pressed
      if (button_2.isClicked) {
        if (!button_2.wasClicked) {
          // store time of first click
          button_2.timesOn.push(button_2.clock.getTime());
          // store time clicked until
          button_2.timesOff.push(button_2.clock.getTime());
        } else {
          // update time clicked until;
          button_2.timesOff[button_2.timesOff.length - 1] = button_2.clock.getTime();
        }
        if (!button_2.wasClicked) {
          // end routine when button_2 is clicked
          continueRoutine = false;
          
        }
        // if button_2 is still clicked next frame, it is not a new click
        button_2.wasClicked = true;
      } else {
        // if button_2 is clicked next frame, it is a new click
        button_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_2 hasn't started / has finished
      button_2.clock.reset();
      // if button_2 is clicked next frame, it is a new click
      button_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pretestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pretestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pretest' ---
    for (const thisComponent of pretestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pretest.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice.response', choice.getRating());
    psychoJS.experiment.addData('choice.rt', choice.getRT());
    psychoJS.experiment.addData('choice.history', choice.getHistory());
    psychoJS.experiment.addData('chat.response', chat.getRating());
    psychoJS.experiment.addData('chat.rt', chat.getRT());
    psychoJS.experiment.addData('correct_radio.response', correct_radio.getRating());
    psychoJS.experiment.addData('correct_radio.rt', correct_radio.getRT());
    psychoJS.experiment.addData('button_2.numClicks', button_2.numClicks);
    psychoJS.experiment.addData('button_2.timesOn', button_2.timesOn);
    psychoJS.experiment.addData('button_2.timesOff', button_2.timesOff);
    // the Routine "pretest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pretest2Components;
function pretest2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pretest2' ---
    t = 0;
    pretest2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('pretest2.started', globalClock.getTime());
    choice2_2.reset()
    correct_radio_2.reset()
    xinxin2.reset()
    yilai2.reset()
    xinren2.reset()
    // reset button_3 to account for continued clicks & clear times on/off
    button_3.reset()
    // keep track of which components have finished
    pretest2Components = [];
    pretest2Components.push(test1);
    pretest2Components.push(question);
    pretest2Components.push(AI);
    pretest2Components.push(choice_2);
    pretest2Components.push(choice2_2);
    pretest2Components.push(correct);
    pretest2Components.push(correct_radio_2);
    pretest2Components.push(xinxin1);
    pretest2Components.push(xinxin2);
    pretest2Components.push(yilai1);
    pretest2Components.push(yilai2);
    pretest2Components.push(xinren);
    pretest2Components.push(xinren2);
    pretest2Components.push(tips_3);
    pretest2Components.push(button_3);
    
    for (const thisComponent of pretest2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pretest2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pretest2' ---
    // get current time
    t = pretest2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1* updates
    if (t >= 0.0 && test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1.tStart = t;  // (not accounting for frame time here)
      test1.frameNStart = frameN;  // exact frame index
      
      test1.setAutoDraw(true);
    }
    
    
    if (question.status === PsychoJS.Status.STARTED){ // only update if being drawn
      question.setFont('Microsoft Yahei', false);
    }
    
    // *question* updates
    if (t >= 0.0 && question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question.tStart = t;  // (not accounting for frame time here)
      question.frameNStart = frameN;  // exact frame index
      
      question.setAutoDraw(true);
    }
    
    
    if (AI.status === PsychoJS.Status.STARTED){ // only update if being drawn
      AI.setFont('Microsoft Yahei', false);
    }
    
    // *AI* updates
    if (t >= 0.0 && AI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AI.tStart = t;  // (not accounting for frame time here)
      AI.frameNStart = frameN;  // exact frame index
      
      AI.setAutoDraw(true);
    }
    
    
    if (choice_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      choice_2.setFont('Microsoft Yahei', false);
    }
    
    // *choice_2* updates
    if (t >= 0.0 && choice_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_2.tStart = t;  // (not accounting for frame time here)
      choice_2.frameNStart = frameN;  // exact frame index
      
      choice_2.setAutoDraw(true);
    }
    
    
    // *choice2_2* updates
    if (t >= 0.0 && choice2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2_2.tStart = t;  // (not accounting for frame time here)
      choice2_2.frameNStart = frameN;  // exact frame index
      
      choice2_2.setAutoDraw(true);
    }
    
    
    if (correct.status === PsychoJS.Status.STARTED){ // only update if being drawn
      correct.setFont('Microsoft Yahei', false);
    }
    
    // *correct* updates
    if (t >= 0.0 && correct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct.tStart = t;  // (not accounting for frame time here)
      correct.frameNStart = frameN;  // exact frame index
      
      correct.setAutoDraw(true);
    }
    
    
    // *correct_radio_2* updates
    if (t >= 0.0 && correct_radio_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_2.tStart = t;  // (not accounting for frame time here)
      correct_radio_2.frameNStart = frameN;  // exact frame index
      
      correct_radio_2.setAutoDraw(true);
    }
    
    
    if (xinxin1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinxin1.setFont('Microsoft Yahei', false);
    }
    
    // *xinxin1* updates
    if (t >= 0.0 && xinxin1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin1.tStart = t;  // (not accounting for frame time here)
      xinxin1.frameNStart = frameN;  // exact frame index
      
      xinxin1.setAutoDraw(true);
    }
    
    
    // *xinxin2* updates
    if (t >= 0.0 && xinxin2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin2.tStart = t;  // (not accounting for frame time here)
      xinxin2.frameNStart = frameN;  // exact frame index
      
      xinxin2.setAutoDraw(true);
    }
    
    
    if (yilai1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      yilai1.setFont('Microsoft Yahei', false);
    }
    
    // *yilai1* updates
    if (t >= 0.0 && yilai1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai1.tStart = t;  // (not accounting for frame time here)
      yilai1.frameNStart = frameN;  // exact frame index
      
      yilai1.setAutoDraw(true);
    }
    
    
    // *yilai2* updates
    if (t >= 0.0 && yilai2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai2.tStart = t;  // (not accounting for frame time here)
      yilai2.frameNStart = frameN;  // exact frame index
      
      yilai2.setAutoDraw(true);
    }
    
    
    if (xinren.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinren.setFont('Microsoft Yahei', false);
    }
    
    // *xinren* updates
    if (t >= 0.0 && xinren.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren.tStart = t;  // (not accounting for frame time here)
      xinren.frameNStart = frameN;  // exact frame index
      
      xinren.setAutoDraw(true);
    }
    
    
    // *xinren2* updates
    if (t >= 0.0 && xinren2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren2.tStart = t;  // (not accounting for frame time here)
      xinren2.frameNStart = frameN;  // exact frame index
      
      xinren2.setAutoDraw(true);
    }
    
    
    // *tips_3* updates
    if (t >= 0.0 && tips_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_3.tStart = t;  // (not accounting for frame time here)
      tips_3.frameNStart = frameN;  // exact frame index
      
      tips_3.setAutoDraw(true);
    }
    
    
    // *button_3* updates
    if (t >= 0 && button_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_3.tStart = t;  // (not accounting for frame time here)
      button_3.frameNStart = frameN;  // exact frame index
      
      button_3.setAutoDraw(true);
    }
    
    if (button_3.status === PsychoJS.Status.STARTED) {
      // check whether button_3 has been pressed
      if (button_3.isClicked) {
        if (!button_3.wasClicked) {
          // store time of first click
          button_3.timesOn.push(button_3.clock.getTime());
          // store time clicked until
          button_3.timesOff.push(button_3.clock.getTime());
        } else {
          // update time clicked until;
          button_3.timesOff[button_3.timesOff.length - 1] = button_3.clock.getTime();
        }
        if (!button_3.wasClicked) {
          // end routine when button_3 is clicked
          continueRoutine = false;
          
        }
        // if button_3 is still clicked next frame, it is not a new click
        button_3.wasClicked = true;
      } else {
        // if button_3 is clicked next frame, it is a new click
        button_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_3 hasn't started / has finished
      button_3.clock.reset();
      // if button_3 is clicked next frame, it is a new click
      button_3.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pretest2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pretest2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pretest2' ---
    for (const thisComponent of pretest2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pretest2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice2_2.response', choice2_2.getRating());
    psychoJS.experiment.addData('choice2_2.rt', choice2_2.getRT());
    psychoJS.experiment.addData('choice2_2.history', choice2_2.getHistory());
    psychoJS.experiment.addData('correct_radio_2.response', correct_radio_2.getRating());
    psychoJS.experiment.addData('correct_radio_2.rt', correct_radio_2.getRT());
    psychoJS.experiment.addData('xinxin2.response', xinxin2.getRating());
    psychoJS.experiment.addData('xinxin2.rt', xinxin2.getRT());
    psychoJS.experiment.addData('yilai2.response', yilai2.getRating());
    psychoJS.experiment.addData('yilai2.rt', yilai2.getRT());
    psychoJS.experiment.addData('xinren2.response', xinren2.getRating());
    psychoJS.experiment.addData('xinren2.rt', xinren2.getRT());
    psychoJS.experiment.addData('button_3.numClicks', button_3.numClicks);
    psychoJS.experiment.addData('button_3.timesOn', button_3.timesOn);
    psychoJS.experiment.addData('button_3.timesOff', button_3.timesOff);
    // the Routine "pretest2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pre_finishComponents;
function pre_finishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_finish' ---
    t = 0;
    pre_finishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('pre_finish.started', globalClock.getTime());
    // reset button_4 to account for continued clicks & clear times on/off
    button_4.reset()
    // keep track of which components have finished
    pre_finishComponents = [];
    pre_finishComponents.push(text_3);
    pre_finishComponents.push(button_4);
    
    for (const thisComponent of pre_finishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pre_finishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_finish' ---
    // get current time
    t = pre_finishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *button_4* updates
    if (t >= 0 && button_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_4.tStart = t;  // (not accounting for frame time here)
      button_4.frameNStart = frameN;  // exact frame index
      
      button_4.setAutoDraw(true);
    }
    
    if (button_4.status === PsychoJS.Status.STARTED) {
      // check whether button_4 has been pressed
      if (button_4.isClicked) {
        if (!button_4.wasClicked) {
          // store time of first click
          button_4.timesOn.push(button_4.clock.getTime());
          // store time clicked until
          button_4.timesOff.push(button_4.clock.getTime());
        } else {
          // update time clicked until;
          button_4.timesOff[button_4.timesOff.length - 1] = button_4.clock.getTime();
        }
        if (!button_4.wasClicked) {
          // end routine when button_4 is clicked
          continueRoutine = false;
          
        }
        // if button_4 is still clicked next frame, it is not a new click
        button_4.wasClicked = true;
      } else {
        // if button_4 is clicked next frame, it is a new click
        button_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_4 hasn't started / has finished
      button_4.clock.reset();
      // if button_4 is clicked next frame, it is a new click
      button_4.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_finishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_finishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_finish' ---
    for (const thisComponent of pre_finishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pre_finish.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_4.numClicks', button_4.numClicks);
    psychoJS.experiment.addData('button_4.timesOn', button_4.timesOn);
    psychoJS.experiment.addData('button_4.timesOff', button_4.timesOff);
    // the Routine "pre_finish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tipsComponents;
function tipsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tips' ---
    t = 0;
    tipsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('tips.started', globalClock.getTime());
    // keep track of which components have finished
    tipsComponents = [];
    tipsComponents.push(text_7);
    
    for (const thisComponent of tipsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tipsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tips' ---
    // get current time
    t = tipsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tipsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tipsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tips' ---
    for (const thisComponent of tipsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('tips.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'loop1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(gapRoutineBegin(snapshot));
      trialsLoopScheduler.add(gapRoutineEachFrame());
      trialsLoopScheduler.add(gapRoutineEnd(snapshot));
      trialsLoopScheduler.add(zu1RoutineBegin(snapshot));
      trialsLoopScheduler.add(zu1RoutineEachFrame());
      trialsLoopScheduler.add(zu1RoutineEnd(snapshot));
      trialsLoopScheduler.add(zu1_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(zu1_1RoutineEachFrame());
      trialsLoopScheduler.add(zu1_1RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'loop2.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(gapRoutineBegin(snapshot));
      trials_2LoopScheduler.add(gapRoutineEachFrame());
      trials_2LoopScheduler.add(gapRoutineEnd(snapshot));
      trials_2LoopScheduler.add(zu2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(zu2RoutineEachFrame());
      trials_2LoopScheduler.add(zu2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(zu2_1RoutineBegin(snapshot));
      trials_2LoopScheduler.add(zu2_1RoutineEachFrame());
      trials_2LoopScheduler.add(zu2_1RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'loop3.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(gapRoutineBegin(snapshot));
      trials_3LoopScheduler.add(gapRoutineEachFrame());
      trials_3LoopScheduler.add(gapRoutineEnd(snapshot));
      trials_3LoopScheduler.add(zu3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(zu3RoutineEachFrame());
      trials_3LoopScheduler.add(zu3RoutineEnd(snapshot));
      trials_3LoopScheduler.add(zu3_1RoutineBegin(snapshot));
      trials_3LoopScheduler.add(zu3_1RoutineEachFrame());
      trials_3LoopScheduler.add(zu3_1RoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'loop4.xlsx',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(gapRoutineBegin(snapshot));
      trials_4LoopScheduler.add(gapRoutineEachFrame());
      trials_4LoopScheduler.add(gapRoutineEnd(snapshot));
      trials_4LoopScheduler.add(zu4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(zu4RoutineEachFrame());
      trials_4LoopScheduler.add(zu4RoutineEnd(snapshot));
      trials_4LoopScheduler.add(zu4_1RoutineBegin(snapshot));
      trials_4LoopScheduler.add(zu4_1RoutineEachFrame());
      trials_4LoopScheduler.add(zu4_1RoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'loop5.xlsx',
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_5 of trials_5) {
      snapshot = trials_5.getSnapshot();
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(gapRoutineBegin(snapshot));
      trials_5LoopScheduler.add(gapRoutineEachFrame());
      trials_5LoopScheduler.add(gapRoutineEnd(snapshot));
      trials_5LoopScheduler.add(zu5RoutineBegin(snapshot));
      trials_5LoopScheduler.add(zu5RoutineEachFrame());
      trials_5LoopScheduler.add(zu5RoutineEnd(snapshot));
      trials_5LoopScheduler.add(zu5_1RoutineBegin(snapshot));
      trials_5LoopScheduler.add(zu5_1RoutineEachFrame());
      trials_5LoopScheduler.add(zu5_1RoutineEnd(snapshot));
      trials_5LoopScheduler.add(trials_5LoopEndIteration(trials_5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var zu1Components;
function zu1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu1' ---
    t = 0;
    zu1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu1.started', globalClock.getTime());
    test1_2.setSize(size);
    test1_2.setImage(picture);
    choice_3.reset()
    chat_2.reset()
    questio_2.setText(text1);
    correct_radio_3.reset()
    // reset button_5 to account for continued clicks & clear times on/off
    button_5.reset()
    // keep track of which components have finished
    zu1Components = [];
    zu1Components.push(test1_2);
    zu1Components.push(choice_3);
    zu1Components.push(chat_2);
    zu1Components.push(questio_2);
    zu1Components.push(corret_2);
    zu1Components.push(chatgpt_2);
    zu1Components.push(correct_radio_3);
    zu1Components.push(tips_4);
    zu1Components.push(button_5);
    
    for (const thisComponent of zu1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu1' ---
    // get current time
    t = zu1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_2* updates
    if (t >= 0.0 && test1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_2.tStart = t;  // (not accounting for frame time here)
      test1_2.frameNStart = frameN;  // exact frame index
      
      test1_2.setAutoDraw(true);
    }
    
    
    // *choice_3* updates
    if (t >= 0.0 && choice_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_3.tStart = t;  // (not accounting for frame time here)
      choice_3.frameNStart = frameN;  // exact frame index
      
      choice_3.setAutoDraw(true);
    }
    
    
    // *chat_2* updates
    if (t >= 0.0 && chat_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_2.tStart = t;  // (not accounting for frame time here)
      chat_2.frameNStart = frameN;  // exact frame index
      
      chat_2.setAutoDraw(true);
    }
    
    
    if (questio_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      questio_2.setFont('Microsoft Yahei', false);
    }
    
    // *questio_2* updates
    if (t >= 0.0 && questio_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questio_2.tStart = t;  // (not accounting for frame time here)
      questio_2.frameNStart = frameN;  // exact frame index
      
      questio_2.setAutoDraw(true);
    }
    
    
    // *corret_2* updates
    if (t >= 0.0 && corret_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corret_2.tStart = t;  // (not accounting for frame time here)
      corret_2.frameNStart = frameN;  // exact frame index
      
      corret_2.setAutoDraw(true);
    }
    
    
    // *chatgpt_2* updates
    if (t >= 0.0 && chatgpt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatgpt_2.tStart = t;  // (not accounting for frame time here)
      chatgpt_2.frameNStart = frameN;  // exact frame index
      
      chatgpt_2.setAutoDraw(true);
    }
    
    
    // *correct_radio_3* updates
    if (t >= 0.0 && correct_radio_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_3.tStart = t;  // (not accounting for frame time here)
      correct_radio_3.frameNStart = frameN;  // exact frame index
      
      correct_radio_3.setAutoDraw(true);
    }
    
    
    // *tips_4* updates
    if (t >= 0.0 && tips_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_4.tStart = t;  // (not accounting for frame time here)
      tips_4.frameNStart = frameN;  // exact frame index
      
      tips_4.setAutoDraw(true);
    }
    
    
    // *button_5* updates
    if (t >= 0 && button_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_5.tStart = t;  // (not accounting for frame time here)
      button_5.frameNStart = frameN;  // exact frame index
      
      button_5.setAutoDraw(true);
    }
    
    if (button_5.status === PsychoJS.Status.STARTED) {
      // check whether button_5 has been pressed
      if (button_5.isClicked) {
        if (!button_5.wasClicked) {
          // store time of first click
          button_5.timesOn.push(button_5.clock.getTime());
          // store time clicked until
          button_5.timesOff.push(button_5.clock.getTime());
        } else {
          // update time clicked until;
          button_5.timesOff[button_5.timesOff.length - 1] = button_5.clock.getTime();
        }
        if (!button_5.wasClicked) {
          // end routine when button_5 is clicked
          continueRoutine = false;
          
        }
        // if button_5 is still clicked next frame, it is not a new click
        button_5.wasClicked = true;
      } else {
        // if button_5 is clicked next frame, it is a new click
        button_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_5 hasn't started / has finished
      button_5.clock.reset();
      // if button_5 is clicked next frame, it is a new click
      button_5.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu1' ---
    for (const thisComponent of zu1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice_3.response', choice_3.getRating());
    psychoJS.experiment.addData('choice_3.rt', choice_3.getRT());
    psychoJS.experiment.addData('choice_3.history', choice_3.getHistory());
    psychoJS.experiment.addData('chat_2.response', chat_2.getRating());
    psychoJS.experiment.addData('chat_2.rt', chat_2.getRT());
    psychoJS.experiment.addData('correct_radio_3.response', correct_radio_3.getRating());
    psychoJS.experiment.addData('correct_radio_3.rt', correct_radio_3.getRT());
    psychoJS.experiment.addData('button_5.numClicks', button_5.numClicks);
    psychoJS.experiment.addData('button_5.timesOn', button_5.timesOn);
    psychoJS.experiment.addData('button_5.timesOff', button_5.timesOff);
    // the Routine "zu1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu1_1Components;
function zu1_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu1_1' ---
    t = 0;
    zu1_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu1_1.started', globalClock.getTime());
    test1_3.setSize(size);
    test1_3.setImage(picture);
    question_2.setText(text2);
    AI_2.setText(text3);
    choice2_4.reset()
    correct_radio_4.reset()
    xinxin2_2.reset()
    yilai2_2.reset()
    xinren2_2.reset()
    // reset button_6 to account for continued clicks & clear times on/off
    button_6.reset()
    // keep track of which components have finished
    zu1_1Components = [];
    zu1_1Components.push(test1_3);
    zu1_1Components.push(question_2);
    zu1_1Components.push(AI_2);
    zu1_1Components.push(choice_4);
    zu1_1Components.push(choice2_4);
    zu1_1Components.push(correct_2);
    zu1_1Components.push(correct_radio_4);
    zu1_1Components.push(xinxin1_2);
    zu1_1Components.push(xinxin2_2);
    zu1_1Components.push(yilai1_2);
    zu1_1Components.push(yilai2_2);
    zu1_1Components.push(xinren_2);
    zu1_1Components.push(xinren2_2);
    zu1_1Components.push(tips_5);
    zu1_1Components.push(button_6);
    
    for (const thisComponent of zu1_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu1_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu1_1' ---
    // get current time
    t = zu1_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_3* updates
    if (t >= 0.0 && test1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_3.tStart = t;  // (not accounting for frame time here)
      test1_3.frameNStart = frameN;  // exact frame index
      
      test1_3.setAutoDraw(true);
    }
    
    
    if (question_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      question_2.setFont('Microsoft Yahei', false);
    }
    
    // *question_2* updates
    if (t >= 0.0 && question_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_2.tStart = t;  // (not accounting for frame time here)
      question_2.frameNStart = frameN;  // exact frame index
      
      question_2.setAutoDraw(true);
    }
    
    
    if (AI_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      AI_2.setFont('Microsoft Yahei', false);
    }
    
    // *AI_2* updates
    if (t >= 0.0 && AI_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AI_2.tStart = t;  // (not accounting for frame time here)
      AI_2.frameNStart = frameN;  // exact frame index
      
      AI_2.setAutoDraw(true);
    }
    
    
    if (choice_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      choice_4.setFont('Microsoft Yahei', false);
    }
    
    // *choice_4* updates
    if (t >= 0.0 && choice_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_4.tStart = t;  // (not accounting for frame time here)
      choice_4.frameNStart = frameN;  // exact frame index
      
      choice_4.setAutoDraw(true);
    }
    
    
    // *choice2_4* updates
    if (t >= 0.0 && choice2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2_4.tStart = t;  // (not accounting for frame time here)
      choice2_4.frameNStart = frameN;  // exact frame index
      
      choice2_4.setAutoDraw(true);
    }
    
    
    if (correct_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      correct_2.setFont('Microsoft Yahei', false);
    }
    
    // *correct_2* updates
    if (t >= 0.0 && correct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_2.tStart = t;  // (not accounting for frame time here)
      correct_2.frameNStart = frameN;  // exact frame index
      
      correct_2.setAutoDraw(true);
    }
    
    
    // *correct_radio_4* updates
    if (t >= 0.0 && correct_radio_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_4.tStart = t;  // (not accounting for frame time here)
      correct_radio_4.frameNStart = frameN;  // exact frame index
      
      correct_radio_4.setAutoDraw(true);
    }
    
    
    if (xinxin1_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinxin1_2.setFont('Microsoft Yahei', false);
    }
    
    // *xinxin1_2* updates
    if (t >= 0.0 && xinxin1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin1_2.tStart = t;  // (not accounting for frame time here)
      xinxin1_2.frameNStart = frameN;  // exact frame index
      
      xinxin1_2.setAutoDraw(true);
    }
    
    
    // *xinxin2_2* updates
    if (t >= 0.0 && xinxin2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin2_2.tStart = t;  // (not accounting for frame time here)
      xinxin2_2.frameNStart = frameN;  // exact frame index
      
      xinxin2_2.setAutoDraw(true);
    }
    
    
    if (yilai1_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      yilai1_2.setFont('Microsoft Yahei', false);
    }
    
    // *yilai1_2* updates
    if (t >= 0.0 && yilai1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai1_2.tStart = t;  // (not accounting for frame time here)
      yilai1_2.frameNStart = frameN;  // exact frame index
      
      yilai1_2.setAutoDraw(true);
    }
    
    
    // *yilai2_2* updates
    if (t >= 0.0 && yilai2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai2_2.tStart = t;  // (not accounting for frame time here)
      yilai2_2.frameNStart = frameN;  // exact frame index
      
      yilai2_2.setAutoDraw(true);
    }
    
    
    if (xinren_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinren_2.setFont('Microsoft Yahei', false);
    }
    
    // *xinren_2* updates
    if (t >= 0.0 && xinren_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren_2.tStart = t;  // (not accounting for frame time here)
      xinren_2.frameNStart = frameN;  // exact frame index
      
      xinren_2.setAutoDraw(true);
    }
    
    
    // *xinren2_2* updates
    if (t >= 0.0 && xinren2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren2_2.tStart = t;  // (not accounting for frame time here)
      xinren2_2.frameNStart = frameN;  // exact frame index
      
      xinren2_2.setAutoDraw(true);
    }
    
    
    // *tips_5* updates
    if (t >= 0.0 && tips_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_5.tStart = t;  // (not accounting for frame time here)
      tips_5.frameNStart = frameN;  // exact frame index
      
      tips_5.setAutoDraw(true);
    }
    
    
    // *button_6* updates
    if (t >= 0 && button_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_6.tStart = t;  // (not accounting for frame time here)
      button_6.frameNStart = frameN;  // exact frame index
      
      button_6.setAutoDraw(true);
    }
    
    if (button_6.status === PsychoJS.Status.STARTED) {
      // check whether button_6 has been pressed
      if (button_6.isClicked) {
        if (!button_6.wasClicked) {
          // store time of first click
          button_6.timesOn.push(button_6.clock.getTime());
          // store time clicked until
          button_6.timesOff.push(button_6.clock.getTime());
        } else {
          // update time clicked until;
          button_6.timesOff[button_6.timesOff.length - 1] = button_6.clock.getTime();
        }
        if (!button_6.wasClicked) {
          // end routine when button_6 is clicked
          continueRoutine = false;
          
        }
        // if button_6 is still clicked next frame, it is not a new click
        button_6.wasClicked = true;
      } else {
        // if button_6 is clicked next frame, it is a new click
        button_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_6 hasn't started / has finished
      button_6.clock.reset();
      // if button_6 is clicked next frame, it is a new click
      button_6.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu1_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu1_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu1_1' ---
    for (const thisComponent of zu1_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu1_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice2_4.response', choice2_4.getRating());
    psychoJS.experiment.addData('choice2_4.rt', choice2_4.getRT());
    psychoJS.experiment.addData('choice2_4.history', choice2_4.getHistory());
    psychoJS.experiment.addData('correct_radio_4.response', correct_radio_4.getRating());
    psychoJS.experiment.addData('correct_radio_4.rt', correct_radio_4.getRT());
    psychoJS.experiment.addData('xinxin2_2.response', xinxin2_2.getRating());
    psychoJS.experiment.addData('xinxin2_2.rt', xinxin2_2.getRT());
    psychoJS.experiment.addData('yilai2_2.response', yilai2_2.getRating());
    psychoJS.experiment.addData('yilai2_2.rt', yilai2_2.getRT());
    psychoJS.experiment.addData('xinren2_2.response', xinren2_2.getRating());
    psychoJS.experiment.addData('xinren2_2.rt', xinren2_2.getRT());
    psychoJS.experiment.addData('button_6.numClicks', button_6.numClicks);
    psychoJS.experiment.addData('button_6.timesOn', button_6.timesOn);
    psychoJS.experiment.addData('button_6.timesOff', button_6.timesOff);
    // the Routine "zu1_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest' ---
    t = 0;
    restClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('rest.started', globalClock.getTime());
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(text_4);
    
    for (const thisComponent of restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest' ---
    // get current time
    t = restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest' ---
    for (const thisComponent of restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu2Components;
function zu2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu2' ---
    t = 0;
    zu2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu2.started', globalClock.getTime());
    test1_4.setSize(size);
    test1_4.setImage(picture);
    choice_7.reset()
    chat_3.reset()
    questio_3.setText(text1);
    correct_radio_5.reset()
    // reset button_9 to account for continued clicks & clear times on/off
    button_9.reset()
    // keep track of which components have finished
    zu2Components = [];
    zu2Components.push(test1_4);
    zu2Components.push(choice_7);
    zu2Components.push(chat_3);
    zu2Components.push(questio_3);
    zu2Components.push(corret_3);
    zu2Components.push(chatgpt_3);
    zu2Components.push(correct_radio_5);
    zu2Components.push(tips_6);
    zu2Components.push(button_9);
    
    for (const thisComponent of zu2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu2' ---
    // get current time
    t = zu2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_4* updates
    if (t >= 0.0 && test1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_4.tStart = t;  // (not accounting for frame time here)
      test1_4.frameNStart = frameN;  // exact frame index
      
      test1_4.setAutoDraw(true);
    }
    
    
    // *choice_7* updates
    if (t >= 0.0 && choice_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_7.tStart = t;  // (not accounting for frame time here)
      choice_7.frameNStart = frameN;  // exact frame index
      
      choice_7.setAutoDraw(true);
    }
    
    
    // *chat_3* updates
    if (t >= 0.0 && chat_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_3.tStart = t;  // (not accounting for frame time here)
      chat_3.frameNStart = frameN;  // exact frame index
      
      chat_3.setAutoDraw(true);
    }
    
    
    if (questio_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      questio_3.setFont('Microsoft Yahei', false);
    }
    
    // *questio_3* updates
    if (t >= 0.0 && questio_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questio_3.tStart = t;  // (not accounting for frame time here)
      questio_3.frameNStart = frameN;  // exact frame index
      
      questio_3.setAutoDraw(true);
    }
    
    
    // *corret_3* updates
    if (t >= 0.0 && corret_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corret_3.tStart = t;  // (not accounting for frame time here)
      corret_3.frameNStart = frameN;  // exact frame index
      
      corret_3.setAutoDraw(true);
    }
    
    
    // *chatgpt_3* updates
    if (t >= 0.0 && chatgpt_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatgpt_3.tStart = t;  // (not accounting for frame time here)
      chatgpt_3.frameNStart = frameN;  // exact frame index
      
      chatgpt_3.setAutoDraw(true);
    }
    
    
    // *correct_radio_5* updates
    if (t >= 0.0 && correct_radio_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_5.tStart = t;  // (not accounting for frame time here)
      correct_radio_5.frameNStart = frameN;  // exact frame index
      
      correct_radio_5.setAutoDraw(true);
    }
    
    
    // *tips_6* updates
    if (t >= 0.0 && tips_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_6.tStart = t;  // (not accounting for frame time here)
      tips_6.frameNStart = frameN;  // exact frame index
      
      tips_6.setAutoDraw(true);
    }
    
    
    // *button_9* updates
    if (t >= 0 && button_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_9.tStart = t;  // (not accounting for frame time here)
      button_9.frameNStart = frameN;  // exact frame index
      
      button_9.setAutoDraw(true);
    }
    
    if (button_9.status === PsychoJS.Status.STARTED) {
      // check whether button_9 has been pressed
      if (button_9.isClicked) {
        if (!button_9.wasClicked) {
          // store time of first click
          button_9.timesOn.push(button_9.clock.getTime());
          // store time clicked until
          button_9.timesOff.push(button_9.clock.getTime());
        } else {
          // update time clicked until;
          button_9.timesOff[button_9.timesOff.length - 1] = button_9.clock.getTime();
        }
        if (!button_9.wasClicked) {
          // end routine when button_9 is clicked
          continueRoutine = false;
          
        }
        // if button_9 is still clicked next frame, it is not a new click
        button_9.wasClicked = true;
      } else {
        // if button_9 is clicked next frame, it is a new click
        button_9.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_9 hasn't started / has finished
      button_9.clock.reset();
      // if button_9 is clicked next frame, it is a new click
      button_9.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu2' ---
    for (const thisComponent of zu2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice_7.response', choice_7.getRating());
    psychoJS.experiment.addData('choice_7.rt', choice_7.getRT());
    psychoJS.experiment.addData('choice_7.history', choice_7.getHistory());
    psychoJS.experiment.addData('chat_3.response', chat_3.getRating());
    psychoJS.experiment.addData('chat_3.rt', chat_3.getRT());
    psychoJS.experiment.addData('correct_radio_5.response', correct_radio_5.getRating());
    psychoJS.experiment.addData('correct_radio_5.rt', correct_radio_5.getRT());
    psychoJS.experiment.addData('button_9.numClicks', button_9.numClicks);
    psychoJS.experiment.addData('button_9.timesOn', button_9.timesOn);
    psychoJS.experiment.addData('button_9.timesOff', button_9.timesOff);
    // the Routine "zu2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu2_1Components;
function zu2_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu2_1' ---
    t = 0;
    zu2_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu2_1.started', globalClock.getTime());
    test1_5.setSize(size);
    test1_5.setImage(picture);
    question_3.setText(text2);
    AI_3.setText(text3);
    choice2.reset()
    correct_radio_6.reset()
    xinxin2_3.reset()
    yilai2_3.reset()
    xinren2_3.reset()
    // reset button_7 to account for continued clicks & clear times on/off
    button_7.reset()
    // keep track of which components have finished
    zu2_1Components = [];
    zu2_1Components.push(test1_5);
    zu2_1Components.push(question_3);
    zu2_1Components.push(AI_3);
    zu2_1Components.push(choice_5);
    zu2_1Components.push(choice2);
    zu2_1Components.push(correct_3);
    zu2_1Components.push(correct_radio_6);
    zu2_1Components.push(xinxin1_3);
    zu2_1Components.push(xinxin2_3);
    zu2_1Components.push(yilai1_3);
    zu2_1Components.push(yilai2_3);
    zu2_1Components.push(xinren_3);
    zu2_1Components.push(xinren2_3);
    zu2_1Components.push(tips_7);
    zu2_1Components.push(button_7);
    
    for (const thisComponent of zu2_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu2_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu2_1' ---
    // get current time
    t = zu2_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_5* updates
    if (t >= 0.0 && test1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_5.tStart = t;  // (not accounting for frame time here)
      test1_5.frameNStart = frameN;  // exact frame index
      
      test1_5.setAutoDraw(true);
    }
    
    
    if (question_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      question_3.setFont('Microsoft Yahei', false);
    }
    
    // *question_3* updates
    if (t >= 0.0 && question_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_3.tStart = t;  // (not accounting for frame time here)
      question_3.frameNStart = frameN;  // exact frame index
      
      question_3.setAutoDraw(true);
    }
    
    
    if (AI_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      AI_3.setFont('Microsoft Yahei', false);
    }
    
    // *AI_3* updates
    if (t >= 0.0 && AI_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AI_3.tStart = t;  // (not accounting for frame time here)
      AI_3.frameNStart = frameN;  // exact frame index
      
      AI_3.setAutoDraw(true);
    }
    
    
    if (choice_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      choice_5.setFont('Microsoft Yahei', false);
    }
    
    // *choice_5* updates
    if (t >= 0.0 && choice_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_5.tStart = t;  // (not accounting for frame time here)
      choice_5.frameNStart = frameN;  // exact frame index
      
      choice_5.setAutoDraw(true);
    }
    
    
    // *choice2* updates
    if (t >= 0.0 && choice2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2.tStart = t;  // (not accounting for frame time here)
      choice2.frameNStart = frameN;  // exact frame index
      
      choice2.setAutoDraw(true);
    }
    
    
    if (correct_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      correct_3.setFont('Microsoft Yahei', false);
    }
    
    // *correct_3* updates
    if (t >= 0.0 && correct_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_3.tStart = t;  // (not accounting for frame time here)
      correct_3.frameNStart = frameN;  // exact frame index
      
      correct_3.setAutoDraw(true);
    }
    
    
    // *correct_radio_6* updates
    if (t >= 0.0 && correct_radio_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_6.tStart = t;  // (not accounting for frame time here)
      correct_radio_6.frameNStart = frameN;  // exact frame index
      
      correct_radio_6.setAutoDraw(true);
    }
    
    
    if (xinxin1_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinxin1_3.setFont('Microsoft Yahei', false);
    }
    
    // *xinxin1_3* updates
    if (t >= 0.0 && xinxin1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin1_3.tStart = t;  // (not accounting for frame time here)
      xinxin1_3.frameNStart = frameN;  // exact frame index
      
      xinxin1_3.setAutoDraw(true);
    }
    
    
    // *xinxin2_3* updates
    if (t >= 0.0 && xinxin2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin2_3.tStart = t;  // (not accounting for frame time here)
      xinxin2_3.frameNStart = frameN;  // exact frame index
      
      xinxin2_3.setAutoDraw(true);
    }
    
    
    if (yilai1_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      yilai1_3.setFont('Microsoft Yahei', false);
    }
    
    // *yilai1_3* updates
    if (t >= 0.0 && yilai1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai1_3.tStart = t;  // (not accounting for frame time here)
      yilai1_3.frameNStart = frameN;  // exact frame index
      
      yilai1_3.setAutoDraw(true);
    }
    
    
    // *yilai2_3* updates
    if (t >= 0.0 && yilai2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai2_3.tStart = t;  // (not accounting for frame time here)
      yilai2_3.frameNStart = frameN;  // exact frame index
      
      yilai2_3.setAutoDraw(true);
    }
    
    
    if (xinren_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinren_3.setFont('Microsoft Yahei', false);
    }
    
    // *xinren_3* updates
    if (t >= 0.0 && xinren_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren_3.tStart = t;  // (not accounting for frame time here)
      xinren_3.frameNStart = frameN;  // exact frame index
      
      xinren_3.setAutoDraw(true);
    }
    
    
    // *xinren2_3* updates
    if (t >= 0.0 && xinren2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren2_3.tStart = t;  // (not accounting for frame time here)
      xinren2_3.frameNStart = frameN;  // exact frame index
      
      xinren2_3.setAutoDraw(true);
    }
    
    
    // *tips_7* updates
    if (t >= 0.0 && tips_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_7.tStart = t;  // (not accounting for frame time here)
      tips_7.frameNStart = frameN;  // exact frame index
      
      tips_7.setAutoDraw(true);
    }
    
    
    // *button_7* updates
    if (t >= 0 && button_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_7.tStart = t;  // (not accounting for frame time here)
      button_7.frameNStart = frameN;  // exact frame index
      
      button_7.setAutoDraw(true);
    }
    
    if (button_7.status === PsychoJS.Status.STARTED) {
      // check whether button_7 has been pressed
      if (button_7.isClicked) {
        if (!button_7.wasClicked) {
          // store time of first click
          button_7.timesOn.push(button_7.clock.getTime());
          // store time clicked until
          button_7.timesOff.push(button_7.clock.getTime());
        } else {
          // update time clicked until;
          button_7.timesOff[button_7.timesOff.length - 1] = button_7.clock.getTime();
        }
        if (!button_7.wasClicked) {
          // end routine when button_7 is clicked
          continueRoutine = false;
          
        }
        // if button_7 is still clicked next frame, it is not a new click
        button_7.wasClicked = true;
      } else {
        // if button_7 is clicked next frame, it is a new click
        button_7.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_7 hasn't started / has finished
      button_7.clock.reset();
      // if button_7 is clicked next frame, it is a new click
      button_7.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu2_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu2_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu2_1' ---
    for (const thisComponent of zu2_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu2_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice2.response', choice2.getRating());
    psychoJS.experiment.addData('choice2.rt', choice2.getRT());
    psychoJS.experiment.addData('choice2.history', choice2.getHistory());
    psychoJS.experiment.addData('correct_radio_6.response', correct_radio_6.getRating());
    psychoJS.experiment.addData('correct_radio_6.rt', correct_radio_6.getRT());
    psychoJS.experiment.addData('xinxin2_3.response', xinxin2_3.getRating());
    psychoJS.experiment.addData('xinxin2_3.rt', xinxin2_3.getRT());
    psychoJS.experiment.addData('yilai2_3.response', yilai2_3.getRating());
    psychoJS.experiment.addData('yilai2_3.rt', yilai2_3.getRT());
    psychoJS.experiment.addData('xinren2_3.response', xinren2_3.getRating());
    psychoJS.experiment.addData('xinren2_3.rt', xinren2_3.getRT());
    psychoJS.experiment.addData('button_7.numClicks', button_7.numClicks);
    psychoJS.experiment.addData('button_7.timesOn', button_7.timesOn);
    psychoJS.experiment.addData('button_7.timesOff', button_7.timesOff);
    // the Routine "zu2_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rest_2Components;
function rest_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest_2' ---
    t = 0;
    rest_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('rest_2.started', globalClock.getTime());
    // keep track of which components have finished
    rest_2Components = [];
    rest_2Components.push(text_5);
    
    for (const thisComponent of rest_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rest_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest_2' ---
    // get current time
    t = rest_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rest_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rest_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest_2' ---
    for (const thisComponent of rest_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest_2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu3Components;
function zu3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu3' ---
    t = 0;
    zu3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu3.started', globalClock.getTime());
    test1_6.setSize(size);
    test1_6.setImage(picture);
    choice_8.reset()
    chat_4.reset()
    questio_4.setText(text1);
    correct_radio_7.reset()
    // reset button_10 to account for continued clicks & clear times on/off
    button_10.reset()
    // keep track of which components have finished
    zu3Components = [];
    zu3Components.push(test1_6);
    zu3Components.push(choice_8);
    zu3Components.push(chat_4);
    zu3Components.push(questio_4);
    zu3Components.push(corret_4);
    zu3Components.push(chatgpt_4);
    zu3Components.push(correct_radio_7);
    zu3Components.push(tips_8);
    zu3Components.push(button_10);
    
    for (const thisComponent of zu3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu3' ---
    // get current time
    t = zu3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_6* updates
    if (t >= 0.0 && test1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_6.tStart = t;  // (not accounting for frame time here)
      test1_6.frameNStart = frameN;  // exact frame index
      
      test1_6.setAutoDraw(true);
    }
    
    
    // *choice_8* updates
    if (t >= 0.0 && choice_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_8.tStart = t;  // (not accounting for frame time here)
      choice_8.frameNStart = frameN;  // exact frame index
      
      choice_8.setAutoDraw(true);
    }
    
    
    // *chat_4* updates
    if (t >= 0.0 && chat_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_4.tStart = t;  // (not accounting for frame time here)
      chat_4.frameNStart = frameN;  // exact frame index
      
      chat_4.setAutoDraw(true);
    }
    
    
    if (questio_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      questio_4.setFont('Microsoft Yahei', false);
    }
    
    // *questio_4* updates
    if (t >= 0.0 && questio_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questio_4.tStart = t;  // (not accounting for frame time here)
      questio_4.frameNStart = frameN;  // exact frame index
      
      questio_4.setAutoDraw(true);
    }
    
    
    // *corret_4* updates
    if (t >= 0.0 && corret_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corret_4.tStart = t;  // (not accounting for frame time here)
      corret_4.frameNStart = frameN;  // exact frame index
      
      corret_4.setAutoDraw(true);
    }
    
    
    // *chatgpt_4* updates
    if (t >= 0.0 && chatgpt_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatgpt_4.tStart = t;  // (not accounting for frame time here)
      chatgpt_4.frameNStart = frameN;  // exact frame index
      
      chatgpt_4.setAutoDraw(true);
    }
    
    
    // *correct_radio_7* updates
    if (t >= 0.0 && correct_radio_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_7.tStart = t;  // (not accounting for frame time here)
      correct_radio_7.frameNStart = frameN;  // exact frame index
      
      correct_radio_7.setAutoDraw(true);
    }
    
    
    // *tips_8* updates
    if (t >= 0.0 && tips_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_8.tStart = t;  // (not accounting for frame time here)
      tips_8.frameNStart = frameN;  // exact frame index
      
      tips_8.setAutoDraw(true);
    }
    
    
    // *button_10* updates
    if (t >= 0 && button_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_10.tStart = t;  // (not accounting for frame time here)
      button_10.frameNStart = frameN;  // exact frame index
      
      button_10.setAutoDraw(true);
    }
    
    if (button_10.status === PsychoJS.Status.STARTED) {
      // check whether button_10 has been pressed
      if (button_10.isClicked) {
        if (!button_10.wasClicked) {
          // store time of first click
          button_10.timesOn.push(button_10.clock.getTime());
          // store time clicked until
          button_10.timesOff.push(button_10.clock.getTime());
        } else {
          // update time clicked until;
          button_10.timesOff[button_10.timesOff.length - 1] = button_10.clock.getTime();
        }
        if (!button_10.wasClicked) {
          // end routine when button_10 is clicked
          continueRoutine = false;
          
        }
        // if button_10 is still clicked next frame, it is not a new click
        button_10.wasClicked = true;
      } else {
        // if button_10 is clicked next frame, it is a new click
        button_10.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_10 hasn't started / has finished
      button_10.clock.reset();
      // if button_10 is clicked next frame, it is a new click
      button_10.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu3' ---
    for (const thisComponent of zu3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice_8.response', choice_8.getRating());
    psychoJS.experiment.addData('choice_8.rt', choice_8.getRT());
    psychoJS.experiment.addData('choice_8.history', choice_8.getHistory());
    psychoJS.experiment.addData('chat_4.response', chat_4.getRating());
    psychoJS.experiment.addData('chat_4.rt', chat_4.getRT());
    psychoJS.experiment.addData('correct_radio_7.response', correct_radio_7.getRating());
    psychoJS.experiment.addData('correct_radio_7.rt', correct_radio_7.getRT());
    psychoJS.experiment.addData('button_10.numClicks', button_10.numClicks);
    psychoJS.experiment.addData('button_10.timesOn', button_10.timesOn);
    psychoJS.experiment.addData('button_10.timesOff', button_10.timesOff);
    // the Routine "zu3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu3_1Components;
function zu3_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu3_1' ---
    t = 0;
    zu3_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu3_1.started', globalClock.getTime());
    test1_7.setSize(size);
    test1_7.setImage(picture);
    question_4.setText(text2);
    AI_4.setText(text3);
    choice2_3.reset()
    correct_radio_8.reset()
    xinxin2_4.reset()
    yilai2_4.reset()
    xinren2_4.reset()
    // reset button_8 to account for continued clicks & clear times on/off
    button_8.reset()
    // keep track of which components have finished
    zu3_1Components = [];
    zu3_1Components.push(test1_7);
    zu3_1Components.push(question_4);
    zu3_1Components.push(AI_4);
    zu3_1Components.push(choice_6);
    zu3_1Components.push(choice2_3);
    zu3_1Components.push(correct_4);
    zu3_1Components.push(correct_radio_8);
    zu3_1Components.push(xinxin1_4);
    zu3_1Components.push(xinxin2_4);
    zu3_1Components.push(yilai1_4);
    zu3_1Components.push(yilai2_4);
    zu3_1Components.push(xinren_4);
    zu3_1Components.push(xinren2_4);
    zu3_1Components.push(tips_9);
    zu3_1Components.push(button_8);
    
    for (const thisComponent of zu3_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu3_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu3_1' ---
    // get current time
    t = zu3_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_7* updates
    if (t >= 0.0 && test1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_7.tStart = t;  // (not accounting for frame time here)
      test1_7.frameNStart = frameN;  // exact frame index
      
      test1_7.setAutoDraw(true);
    }
    
    
    if (question_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      question_4.setFont('Microsoft Yahei', false);
    }
    
    // *question_4* updates
    if (t >= 0.0 && question_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_4.tStart = t;  // (not accounting for frame time here)
      question_4.frameNStart = frameN;  // exact frame index
      
      question_4.setAutoDraw(true);
    }
    
    
    if (AI_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      AI_4.setFont('Microsoft Yahei', false);
    }
    
    // *AI_4* updates
    if (t >= 0.0 && AI_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AI_4.tStart = t;  // (not accounting for frame time here)
      AI_4.frameNStart = frameN;  // exact frame index
      
      AI_4.setAutoDraw(true);
    }
    
    
    if (choice_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      choice_6.setFont('Microsoft Yahei', false);
    }
    
    // *choice_6* updates
    if (t >= 0.0 && choice_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_6.tStart = t;  // (not accounting for frame time here)
      choice_6.frameNStart = frameN;  // exact frame index
      
      choice_6.setAutoDraw(true);
    }
    
    
    // *choice2_3* updates
    if (t >= 0.0 && choice2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2_3.tStart = t;  // (not accounting for frame time here)
      choice2_3.frameNStart = frameN;  // exact frame index
      
      choice2_3.setAutoDraw(true);
    }
    
    
    if (correct_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      correct_4.setFont('Microsoft Yahei', false);
    }
    
    // *correct_4* updates
    if (t >= 0.0 && correct_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_4.tStart = t;  // (not accounting for frame time here)
      correct_4.frameNStart = frameN;  // exact frame index
      
      correct_4.setAutoDraw(true);
    }
    
    
    // *correct_radio_8* updates
    if (t >= 0.0 && correct_radio_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_8.tStart = t;  // (not accounting for frame time here)
      correct_radio_8.frameNStart = frameN;  // exact frame index
      
      correct_radio_8.setAutoDraw(true);
    }
    
    
    if (xinxin1_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinxin1_4.setFont('Microsoft Yahei', false);
    }
    
    // *xinxin1_4* updates
    if (t >= 0.0 && xinxin1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin1_4.tStart = t;  // (not accounting for frame time here)
      xinxin1_4.frameNStart = frameN;  // exact frame index
      
      xinxin1_4.setAutoDraw(true);
    }
    
    
    // *xinxin2_4* updates
    if (t >= 0.0 && xinxin2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin2_4.tStart = t;  // (not accounting for frame time here)
      xinxin2_4.frameNStart = frameN;  // exact frame index
      
      xinxin2_4.setAutoDraw(true);
    }
    
    
    if (yilai1_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      yilai1_4.setFont('Microsoft Yahei', false);
    }
    
    // *yilai1_4* updates
    if (t >= 0.0 && yilai1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai1_4.tStart = t;  // (not accounting for frame time here)
      yilai1_4.frameNStart = frameN;  // exact frame index
      
      yilai1_4.setAutoDraw(true);
    }
    
    
    // *yilai2_4* updates
    if (t >= 0.0 && yilai2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai2_4.tStart = t;  // (not accounting for frame time here)
      yilai2_4.frameNStart = frameN;  // exact frame index
      
      yilai2_4.setAutoDraw(true);
    }
    
    
    if (xinren_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinren_4.setFont('Microsoft Yahei', false);
    }
    
    // *xinren_4* updates
    if (t >= 0.0 && xinren_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren_4.tStart = t;  // (not accounting for frame time here)
      xinren_4.frameNStart = frameN;  // exact frame index
      
      xinren_4.setAutoDraw(true);
    }
    
    
    // *xinren2_4* updates
    if (t >= 0.0 && xinren2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren2_4.tStart = t;  // (not accounting for frame time here)
      xinren2_4.frameNStart = frameN;  // exact frame index
      
      xinren2_4.setAutoDraw(true);
    }
    
    
    // *tips_9* updates
    if (t >= 0.0 && tips_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_9.tStart = t;  // (not accounting for frame time here)
      tips_9.frameNStart = frameN;  // exact frame index
      
      tips_9.setAutoDraw(true);
    }
    
    
    // *button_8* updates
    if (t >= 0 && button_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_8.tStart = t;  // (not accounting for frame time here)
      button_8.frameNStart = frameN;  // exact frame index
      
      button_8.setAutoDraw(true);
    }
    
    if (button_8.status === PsychoJS.Status.STARTED) {
      // check whether button_8 has been pressed
      if (button_8.isClicked) {
        if (!button_8.wasClicked) {
          // store time of first click
          button_8.timesOn.push(button_8.clock.getTime());
          // store time clicked until
          button_8.timesOff.push(button_8.clock.getTime());
        } else {
          // update time clicked until;
          button_8.timesOff[button_8.timesOff.length - 1] = button_8.clock.getTime();
        }
        if (!button_8.wasClicked) {
          // end routine when button_8 is clicked
          continueRoutine = false;
          
        }
        // if button_8 is still clicked next frame, it is not a new click
        button_8.wasClicked = true;
      } else {
        // if button_8 is clicked next frame, it is a new click
        button_8.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_8 hasn't started / has finished
      button_8.clock.reset();
      // if button_8 is clicked next frame, it is a new click
      button_8.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu3_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu3_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu3_1' ---
    for (const thisComponent of zu3_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu3_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice2_3.response', choice2_3.getRating());
    psychoJS.experiment.addData('choice2_3.rt', choice2_3.getRT());
    psychoJS.experiment.addData('choice2_3.history', choice2_3.getHistory());
    psychoJS.experiment.addData('correct_radio_8.response', correct_radio_8.getRating());
    psychoJS.experiment.addData('correct_radio_8.rt', correct_radio_8.getRT());
    psychoJS.experiment.addData('xinxin2_4.response', xinxin2_4.getRating());
    psychoJS.experiment.addData('xinxin2_4.rt', xinxin2_4.getRT());
    psychoJS.experiment.addData('yilai2_4.response', yilai2_4.getRating());
    psychoJS.experiment.addData('yilai2_4.rt', yilai2_4.getRT());
    psychoJS.experiment.addData('xinren2_4.response', xinren2_4.getRating());
    psychoJS.experiment.addData('xinren2_4.rt', xinren2_4.getRT());
    psychoJS.experiment.addData('button_8.numClicks', button_8.numClicks);
    psychoJS.experiment.addData('button_8.timesOn', button_8.timesOn);
    psychoJS.experiment.addData('button_8.timesOff', button_8.timesOff);
    // the Routine "zu3_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rest_3Components;
function rest_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest_3' ---
    t = 0;
    rest_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('rest_3.started', globalClock.getTime());
    // keep track of which components have finished
    rest_3Components = [];
    rest_3Components.push(text_8);
    
    for (const thisComponent of rest_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rest_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest_3' ---
    // get current time
    t = rest_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rest_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rest_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest_3' ---
    for (const thisComponent of rest_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest_3.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu4Components;
function zu4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu4' ---
    t = 0;
    zu4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu4.started', globalClock.getTime());
    test1_8.setSize(size);
    test1_8.setImage(picture);
    choice_9.reset()
    chat_5.reset()
    questio_5.setText(text1);
    correct_radio_9.reset()
    // reset button_11 to account for continued clicks & clear times on/off
    button_11.reset()
    // keep track of which components have finished
    zu4Components = [];
    zu4Components.push(test1_8);
    zu4Components.push(choice_9);
    zu4Components.push(chat_5);
    zu4Components.push(questio_5);
    zu4Components.push(corret_5);
    zu4Components.push(chatgpt_5);
    zu4Components.push(correct_radio_9);
    zu4Components.push(tips_10);
    zu4Components.push(button_11);
    
    for (const thisComponent of zu4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu4' ---
    // get current time
    t = zu4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_8* updates
    if (t >= 0.0 && test1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_8.tStart = t;  // (not accounting for frame time here)
      test1_8.frameNStart = frameN;  // exact frame index
      
      test1_8.setAutoDraw(true);
    }
    
    
    // *choice_9* updates
    if (t >= 0.0 && choice_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_9.tStart = t;  // (not accounting for frame time here)
      choice_9.frameNStart = frameN;  // exact frame index
      
      choice_9.setAutoDraw(true);
    }
    
    
    // *chat_5* updates
    if (t >= 0.0 && chat_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_5.tStart = t;  // (not accounting for frame time here)
      chat_5.frameNStart = frameN;  // exact frame index
      
      chat_5.setAutoDraw(true);
    }
    
    
    if (questio_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      questio_5.setFont('Microsoft Yahei', false);
    }
    
    // *questio_5* updates
    if (t >= 0.0 && questio_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questio_5.tStart = t;  // (not accounting for frame time here)
      questio_5.frameNStart = frameN;  // exact frame index
      
      questio_5.setAutoDraw(true);
    }
    
    
    // *corret_5* updates
    if (t >= 0.0 && corret_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corret_5.tStart = t;  // (not accounting for frame time here)
      corret_5.frameNStart = frameN;  // exact frame index
      
      corret_5.setAutoDraw(true);
    }
    
    
    // *chatgpt_5* updates
    if (t >= 0.0 && chatgpt_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatgpt_5.tStart = t;  // (not accounting for frame time here)
      chatgpt_5.frameNStart = frameN;  // exact frame index
      
      chatgpt_5.setAutoDraw(true);
    }
    
    
    // *correct_radio_9* updates
    if (t >= 0.0 && correct_radio_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_9.tStart = t;  // (not accounting for frame time here)
      correct_radio_9.frameNStart = frameN;  // exact frame index
      
      correct_radio_9.setAutoDraw(true);
    }
    
    
    // *tips_10* updates
    if (t >= 0.0 && tips_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_10.tStart = t;  // (not accounting for frame time here)
      tips_10.frameNStart = frameN;  // exact frame index
      
      tips_10.setAutoDraw(true);
    }
    
    
    // *button_11* updates
    if (t >= 0 && button_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_11.tStart = t;  // (not accounting for frame time here)
      button_11.frameNStart = frameN;  // exact frame index
      
      button_11.setAutoDraw(true);
    }
    
    if (button_11.status === PsychoJS.Status.STARTED) {
      // check whether button_11 has been pressed
      if (button_11.isClicked) {
        if (!button_11.wasClicked) {
          // store time of first click
          button_11.timesOn.push(button_11.clock.getTime());
          // store time clicked until
          button_11.timesOff.push(button_11.clock.getTime());
        } else {
          // update time clicked until;
          button_11.timesOff[button_11.timesOff.length - 1] = button_11.clock.getTime();
        }
        if (!button_11.wasClicked) {
          // end routine when button_11 is clicked
          continueRoutine = false;
          
        }
        // if button_11 is still clicked next frame, it is not a new click
        button_11.wasClicked = true;
      } else {
        // if button_11 is clicked next frame, it is a new click
        button_11.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_11 hasn't started / has finished
      button_11.clock.reset();
      // if button_11 is clicked next frame, it is a new click
      button_11.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu4' ---
    for (const thisComponent of zu4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu4.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice_9.response', choice_9.getRating());
    psychoJS.experiment.addData('choice_9.rt', choice_9.getRT());
    psychoJS.experiment.addData('choice_9.history', choice_9.getHistory());
    psychoJS.experiment.addData('chat_5.response', chat_5.getRating());
    psychoJS.experiment.addData('chat_5.rt', chat_5.getRT());
    psychoJS.experiment.addData('correct_radio_9.response', correct_radio_9.getRating());
    psychoJS.experiment.addData('correct_radio_9.rt', correct_radio_9.getRT());
    psychoJS.experiment.addData('button_11.numClicks', button_11.numClicks);
    psychoJS.experiment.addData('button_11.timesOn', button_11.timesOn);
    psychoJS.experiment.addData('button_11.timesOff', button_11.timesOff);
    // the Routine "zu4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu4_1Components;
function zu4_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu4_1' ---
    t = 0;
    zu4_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu4_1.started', globalClock.getTime());
    test1_9.setSize(size);
    test1_9.setImage(picture);
    question_5.setText(text2);
    AI_5.setText(text3);
    choice2_5.reset()
    correct_radio_10.reset()
    xinxin2_5.reset()
    yilai2_5.reset()
    xinren2_5.reset()
    // reset button_12 to account for continued clicks & clear times on/off
    button_12.reset()
    // keep track of which components have finished
    zu4_1Components = [];
    zu4_1Components.push(test1_9);
    zu4_1Components.push(question_5);
    zu4_1Components.push(AI_5);
    zu4_1Components.push(choice_10);
    zu4_1Components.push(choice2_5);
    zu4_1Components.push(correct_5);
    zu4_1Components.push(correct_radio_10);
    zu4_1Components.push(xinxin1_5);
    zu4_1Components.push(xinxin2_5);
    zu4_1Components.push(yilai1_5);
    zu4_1Components.push(yilai2_5);
    zu4_1Components.push(xinren_5);
    zu4_1Components.push(xinren2_5);
    zu4_1Components.push(tips_11);
    zu4_1Components.push(button_12);
    
    for (const thisComponent of zu4_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu4_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu4_1' ---
    // get current time
    t = zu4_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_9* updates
    if (t >= 0.0 && test1_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_9.tStart = t;  // (not accounting for frame time here)
      test1_9.frameNStart = frameN;  // exact frame index
      
      test1_9.setAutoDraw(true);
    }
    
    
    if (question_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      question_5.setFont('Microsoft Yahei', false);
    }
    
    // *question_5* updates
    if (t >= 0.0 && question_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_5.tStart = t;  // (not accounting for frame time here)
      question_5.frameNStart = frameN;  // exact frame index
      
      question_5.setAutoDraw(true);
    }
    
    
    if (AI_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      AI_5.setFont('Microsoft Yahei', false);
    }
    
    // *AI_5* updates
    if (t >= 0.0 && AI_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AI_5.tStart = t;  // (not accounting for frame time here)
      AI_5.frameNStart = frameN;  // exact frame index
      
      AI_5.setAutoDraw(true);
    }
    
    
    if (choice_10.status === PsychoJS.Status.STARTED){ // only update if being drawn
      choice_10.setFont('Microsoft Yahei', false);
    }
    
    // *choice_10* updates
    if (t >= 0.0 && choice_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_10.tStart = t;  // (not accounting for frame time here)
      choice_10.frameNStart = frameN;  // exact frame index
      
      choice_10.setAutoDraw(true);
    }
    
    
    // *choice2_5* updates
    if (t >= 0.0 && choice2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2_5.tStart = t;  // (not accounting for frame time here)
      choice2_5.frameNStart = frameN;  // exact frame index
      
      choice2_5.setAutoDraw(true);
    }
    
    
    if (correct_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      correct_5.setFont('Microsoft Yahei', false);
    }
    
    // *correct_5* updates
    if (t >= 0.0 && correct_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_5.tStart = t;  // (not accounting for frame time here)
      correct_5.frameNStart = frameN;  // exact frame index
      
      correct_5.setAutoDraw(true);
    }
    
    
    // *correct_radio_10* updates
    if (t >= 0.0 && correct_radio_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_10.tStart = t;  // (not accounting for frame time here)
      correct_radio_10.frameNStart = frameN;  // exact frame index
      
      correct_radio_10.setAutoDraw(true);
    }
    
    
    if (xinxin1_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinxin1_5.setFont('Microsoft Yahei', false);
    }
    
    // *xinxin1_5* updates
    if (t >= 0.0 && xinxin1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin1_5.tStart = t;  // (not accounting for frame time here)
      xinxin1_5.frameNStart = frameN;  // exact frame index
      
      xinxin1_5.setAutoDraw(true);
    }
    
    
    // *xinxin2_5* updates
    if (t >= 0.0 && xinxin2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin2_5.tStart = t;  // (not accounting for frame time here)
      xinxin2_5.frameNStart = frameN;  // exact frame index
      
      xinxin2_5.setAutoDraw(true);
    }
    
    
    if (yilai1_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      yilai1_5.setFont('Microsoft Yahei', false);
    }
    
    // *yilai1_5* updates
    if (t >= 0.0 && yilai1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai1_5.tStart = t;  // (not accounting for frame time here)
      yilai1_5.frameNStart = frameN;  // exact frame index
      
      yilai1_5.setAutoDraw(true);
    }
    
    
    // *yilai2_5* updates
    if (t >= 0.0 && yilai2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai2_5.tStart = t;  // (not accounting for frame time here)
      yilai2_5.frameNStart = frameN;  // exact frame index
      
      yilai2_5.setAutoDraw(true);
    }
    
    
    if (xinren_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinren_5.setFont('Microsoft Yahei', false);
    }
    
    // *xinren_5* updates
    if (t >= 0.0 && xinren_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren_5.tStart = t;  // (not accounting for frame time here)
      xinren_5.frameNStart = frameN;  // exact frame index
      
      xinren_5.setAutoDraw(true);
    }
    
    
    // *xinren2_5* updates
    if (t >= 0.0 && xinren2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren2_5.tStart = t;  // (not accounting for frame time here)
      xinren2_5.frameNStart = frameN;  // exact frame index
      
      xinren2_5.setAutoDraw(true);
    }
    
    
    // *tips_11* updates
    if (t >= 0.0 && tips_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_11.tStart = t;  // (not accounting for frame time here)
      tips_11.frameNStart = frameN;  // exact frame index
      
      tips_11.setAutoDraw(true);
    }
    
    
    // *button_12* updates
    if (t >= 0 && button_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_12.tStart = t;  // (not accounting for frame time here)
      button_12.frameNStart = frameN;  // exact frame index
      
      button_12.setAutoDraw(true);
    }
    
    if (button_12.status === PsychoJS.Status.STARTED) {
      // check whether button_12 has been pressed
      if (button_12.isClicked) {
        if (!button_12.wasClicked) {
          // store time of first click
          button_12.timesOn.push(button_12.clock.getTime());
          // store time clicked until
          button_12.timesOff.push(button_12.clock.getTime());
        } else {
          // update time clicked until;
          button_12.timesOff[button_12.timesOff.length - 1] = button_12.clock.getTime();
        }
        if (!button_12.wasClicked) {
          // end routine when button_12 is clicked
          continueRoutine = false;
          
        }
        // if button_12 is still clicked next frame, it is not a new click
        button_12.wasClicked = true;
      } else {
        // if button_12 is clicked next frame, it is a new click
        button_12.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_12 hasn't started / has finished
      button_12.clock.reset();
      // if button_12 is clicked next frame, it is a new click
      button_12.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu4_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu4_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu4_1' ---
    for (const thisComponent of zu4_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu4_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice2_5.response', choice2_5.getRating());
    psychoJS.experiment.addData('choice2_5.rt', choice2_5.getRT());
    psychoJS.experiment.addData('choice2_5.history', choice2_5.getHistory());
    psychoJS.experiment.addData('correct_radio_10.response', correct_radio_10.getRating());
    psychoJS.experiment.addData('correct_radio_10.rt', correct_radio_10.getRT());
    psychoJS.experiment.addData('xinxin2_5.response', xinxin2_5.getRating());
    psychoJS.experiment.addData('xinxin2_5.rt', xinxin2_5.getRT());
    psychoJS.experiment.addData('yilai2_5.response', yilai2_5.getRating());
    psychoJS.experiment.addData('yilai2_5.rt', yilai2_5.getRT());
    psychoJS.experiment.addData('xinren2_5.response', xinren2_5.getRating());
    psychoJS.experiment.addData('xinren2_5.rt', xinren2_5.getRT());
    psychoJS.experiment.addData('button_12.numClicks', button_12.numClicks);
    psychoJS.experiment.addData('button_12.timesOn', button_12.timesOn);
    psychoJS.experiment.addData('button_12.timesOff', button_12.timesOff);
    // the Routine "zu4_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rest_4Components;
function rest_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest_4' ---
    t = 0;
    rest_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('rest_4.started', globalClock.getTime());
    // keep track of which components have finished
    rest_4Components = [];
    rest_4Components.push(text_9);
    
    for (const thisComponent of rest_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rest_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest_4' ---
    // get current time
    t = rest_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rest_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rest_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest_4' ---
    for (const thisComponent of rest_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest_4.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu5Components;
function zu5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu5' ---
    t = 0;
    zu5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu5.started', globalClock.getTime());
    test1_10.setSize(size);
    test1_10.setImage(picture);
    choice_11.reset()
    chat_6.reset()
    questio_6.setText(text1);
    correct_radio_11.reset()
    // reset button_13 to account for continued clicks & clear times on/off
    button_13.reset()
    // keep track of which components have finished
    zu5Components = [];
    zu5Components.push(test1_10);
    zu5Components.push(choice_11);
    zu5Components.push(chat_6);
    zu5Components.push(questio_6);
    zu5Components.push(corret_6);
    zu5Components.push(chatgpt_6);
    zu5Components.push(correct_radio_11);
    zu5Components.push(tips_12);
    zu5Components.push(button_13);
    
    for (const thisComponent of zu5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu5' ---
    // get current time
    t = zu5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_10* updates
    if (t >= 0.0 && test1_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_10.tStart = t;  // (not accounting for frame time here)
      test1_10.frameNStart = frameN;  // exact frame index
      
      test1_10.setAutoDraw(true);
    }
    
    
    // *choice_11* updates
    if (t >= 0.0 && choice_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_11.tStart = t;  // (not accounting for frame time here)
      choice_11.frameNStart = frameN;  // exact frame index
      
      choice_11.setAutoDraw(true);
    }
    
    
    // *chat_6* updates
    if (t >= 0.0 && chat_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_6.tStart = t;  // (not accounting for frame time here)
      chat_6.frameNStart = frameN;  // exact frame index
      
      chat_6.setAutoDraw(true);
    }
    
    
    if (questio_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      questio_6.setFont('Microsoft Yahei', false);
    }
    
    // *questio_6* updates
    if (t >= 0.0 && questio_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questio_6.tStart = t;  // (not accounting for frame time here)
      questio_6.frameNStart = frameN;  // exact frame index
      
      questio_6.setAutoDraw(true);
    }
    
    
    // *corret_6* updates
    if (t >= 0.0 && corret_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corret_6.tStart = t;  // (not accounting for frame time here)
      corret_6.frameNStart = frameN;  // exact frame index
      
      corret_6.setAutoDraw(true);
    }
    
    
    // *chatgpt_6* updates
    if (t >= 0.0 && chatgpt_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatgpt_6.tStart = t;  // (not accounting for frame time here)
      chatgpt_6.frameNStart = frameN;  // exact frame index
      
      chatgpt_6.setAutoDraw(true);
    }
    
    
    // *correct_radio_11* updates
    if (t >= 0.0 && correct_radio_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_11.tStart = t;  // (not accounting for frame time here)
      correct_radio_11.frameNStart = frameN;  // exact frame index
      
      correct_radio_11.setAutoDraw(true);
    }
    
    
    // *tips_12* updates
    if (t >= 0.0 && tips_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_12.tStart = t;  // (not accounting for frame time here)
      tips_12.frameNStart = frameN;  // exact frame index
      
      tips_12.setAutoDraw(true);
    }
    
    
    // *button_13* updates
    if (t >= 0 && button_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_13.tStart = t;  // (not accounting for frame time here)
      button_13.frameNStart = frameN;  // exact frame index
      
      button_13.setAutoDraw(true);
    }
    
    if (button_13.status === PsychoJS.Status.STARTED) {
      // check whether button_13 has been pressed
      if (button_13.isClicked) {
        if (!button_13.wasClicked) {
          // store time of first click
          button_13.timesOn.push(button_13.clock.getTime());
          // store time clicked until
          button_13.timesOff.push(button_13.clock.getTime());
        } else {
          // update time clicked until;
          button_13.timesOff[button_13.timesOff.length - 1] = button_13.clock.getTime();
        }
        if (!button_13.wasClicked) {
          // end routine when button_13 is clicked
          continueRoutine = false;
          
        }
        // if button_13 is still clicked next frame, it is not a new click
        button_13.wasClicked = true;
      } else {
        // if button_13 is clicked next frame, it is a new click
        button_13.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_13 hasn't started / has finished
      button_13.clock.reset();
      // if button_13 is clicked next frame, it is a new click
      button_13.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu5' ---
    for (const thisComponent of zu5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu5.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice_11.response', choice_11.getRating());
    psychoJS.experiment.addData('choice_11.rt', choice_11.getRT());
    psychoJS.experiment.addData('choice_11.history', choice_11.getHistory());
    psychoJS.experiment.addData('chat_6.response', chat_6.getRating());
    psychoJS.experiment.addData('chat_6.rt', chat_6.getRT());
    psychoJS.experiment.addData('correct_radio_11.response', correct_radio_11.getRating());
    psychoJS.experiment.addData('correct_radio_11.rt', correct_radio_11.getRT());
    psychoJS.experiment.addData('button_13.numClicks', button_13.numClicks);
    psychoJS.experiment.addData('button_13.timesOn', button_13.timesOn);
    psychoJS.experiment.addData('button_13.timesOff', button_13.timesOff);
    // the Routine "zu5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var zu5_1Components;
function zu5_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zu5_1' ---
    t = 0;
    zu5_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zu5_1.started', globalClock.getTime());
    test1_11.setSize(size);
    test1_11.setImage(picture);
    question_6.setText(text2);
    AI_6.setText(text3);
    choice2_6.reset()
    correct_radio_12.reset()
    xinxin2_6.reset()
    yilai2_6.reset()
    xinren2_6.reset()
    // reset button_14 to account for continued clicks & clear times on/off
    button_14.reset()
    // keep track of which components have finished
    zu5_1Components = [];
    zu5_1Components.push(test1_11);
    zu5_1Components.push(question_6);
    zu5_1Components.push(AI_6);
    zu5_1Components.push(choice_12);
    zu5_1Components.push(choice2_6);
    zu5_1Components.push(correct_6);
    zu5_1Components.push(correct_radio_12);
    zu5_1Components.push(xinxin1_6);
    zu5_1Components.push(xinxin2_6);
    zu5_1Components.push(yilai1_6);
    zu5_1Components.push(yilai2_6);
    zu5_1Components.push(xinren_6);
    zu5_1Components.push(xinren2_6);
    zu5_1Components.push(tips_13);
    zu5_1Components.push(button_14);
    
    for (const thisComponent of zu5_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zu5_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zu5_1' ---
    // get current time
    t = zu5_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_11* updates
    if (t >= 0.0 && test1_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_11.tStart = t;  // (not accounting for frame time here)
      test1_11.frameNStart = frameN;  // exact frame index
      
      test1_11.setAutoDraw(true);
    }
    
    
    if (question_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      question_6.setFont('Microsoft Yahei', false);
    }
    
    // *question_6* updates
    if (t >= 0.0 && question_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_6.tStart = t;  // (not accounting for frame time here)
      question_6.frameNStart = frameN;  // exact frame index
      
      question_6.setAutoDraw(true);
    }
    
    
    if (AI_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      AI_6.setFont('Microsoft Yahei', false);
    }
    
    // *AI_6* updates
    if (t >= 0.0 && AI_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AI_6.tStart = t;  // (not accounting for frame time here)
      AI_6.frameNStart = frameN;  // exact frame index
      
      AI_6.setAutoDraw(true);
    }
    
    
    if (choice_12.status === PsychoJS.Status.STARTED){ // only update if being drawn
      choice_12.setFont('Microsoft Yahei', false);
    }
    
    // *choice_12* updates
    if (t >= 0.0 && choice_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_12.tStart = t;  // (not accounting for frame time here)
      choice_12.frameNStart = frameN;  // exact frame index
      
      choice_12.setAutoDraw(true);
    }
    
    
    // *choice2_6* updates
    if (t >= 0.0 && choice2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2_6.tStart = t;  // (not accounting for frame time here)
      choice2_6.frameNStart = frameN;  // exact frame index
      
      choice2_6.setAutoDraw(true);
    }
    
    
    if (correct_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      correct_6.setFont('Microsoft Yahei', false);
    }
    
    // *correct_6* updates
    if (t >= 0.0 && correct_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_6.tStart = t;  // (not accounting for frame time here)
      correct_6.frameNStart = frameN;  // exact frame index
      
      correct_6.setAutoDraw(true);
    }
    
    
    // *correct_radio_12* updates
    if (t >= 0.0 && correct_radio_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_radio_12.tStart = t;  // (not accounting for frame time here)
      correct_radio_12.frameNStart = frameN;  // exact frame index
      
      correct_radio_12.setAutoDraw(true);
    }
    
    
    if (xinxin1_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinxin1_6.setFont('Microsoft Yahei', false);
    }
    
    // *xinxin1_6* updates
    if (t >= 0.0 && xinxin1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin1_6.tStart = t;  // (not accounting for frame time here)
      xinxin1_6.frameNStart = frameN;  // exact frame index
      
      xinxin1_6.setAutoDraw(true);
    }
    
    
    // *xinxin2_6* updates
    if (t >= 0.0 && xinxin2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinxin2_6.tStart = t;  // (not accounting for frame time here)
      xinxin2_6.frameNStart = frameN;  // exact frame index
      
      xinxin2_6.setAutoDraw(true);
    }
    
    
    if (yilai1_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      yilai1_6.setFont('Microsoft Yahei', false);
    }
    
    // *yilai1_6* updates
    if (t >= 0.0 && yilai1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai1_6.tStart = t;  // (not accounting for frame time here)
      yilai1_6.frameNStart = frameN;  // exact frame index
      
      yilai1_6.setAutoDraw(true);
    }
    
    
    // *yilai2_6* updates
    if (t >= 0.0 && yilai2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yilai2_6.tStart = t;  // (not accounting for frame time here)
      yilai2_6.frameNStart = frameN;  // exact frame index
      
      yilai2_6.setAutoDraw(true);
    }
    
    
    if (xinren_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      xinren_6.setFont('Microsoft Yahei', false);
    }
    
    // *xinren_6* updates
    if (t >= 0.0 && xinren_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren_6.tStart = t;  // (not accounting for frame time here)
      xinren_6.frameNStart = frameN;  // exact frame index
      
      xinren_6.setAutoDraw(true);
    }
    
    
    // *xinren2_6* updates
    if (t >= 0.0 && xinren2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      xinren2_6.tStart = t;  // (not accounting for frame time here)
      xinren2_6.frameNStart = frameN;  // exact frame index
      
      xinren2_6.setAutoDraw(true);
    }
    
    
    // *tips_13* updates
    if (t >= 0.0 && tips_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_13.tStart = t;  // (not accounting for frame time here)
      tips_13.frameNStart = frameN;  // exact frame index
      
      tips_13.setAutoDraw(true);
    }
    
    
    // *button_14* updates
    if (t >= 0 && button_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_14.tStart = t;  // (not accounting for frame time here)
      button_14.frameNStart = frameN;  // exact frame index
      
      button_14.setAutoDraw(true);
    }
    
    if (button_14.status === PsychoJS.Status.STARTED) {
      // check whether button_14 has been pressed
      if (button_14.isClicked) {
        if (!button_14.wasClicked) {
          // store time of first click
          button_14.timesOn.push(button_14.clock.getTime());
          // store time clicked until
          button_14.timesOff.push(button_14.clock.getTime());
        } else {
          // update time clicked until;
          button_14.timesOff[button_14.timesOff.length - 1] = button_14.clock.getTime();
        }
        if (!button_14.wasClicked) {
          // end routine when button_14 is clicked
          continueRoutine = false;
          
        }
        // if button_14 is still clicked next frame, it is not a new click
        button_14.wasClicked = true;
      } else {
        // if button_14 is clicked next frame, it is a new click
        button_14.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_14 hasn't started / has finished
      button_14.clock.reset();
      // if button_14 is clicked next frame, it is a new click
      button_14.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of zu5_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zu5_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zu5_1' ---
    for (const thisComponent of zu5_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zu5_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('choice2_6.response', choice2_6.getRating());
    psychoJS.experiment.addData('choice2_6.rt', choice2_6.getRT());
    psychoJS.experiment.addData('choice2_6.history', choice2_6.getHistory());
    psychoJS.experiment.addData('correct_radio_12.response', correct_radio_12.getRating());
    psychoJS.experiment.addData('correct_radio_12.rt', correct_radio_12.getRT());
    psychoJS.experiment.addData('xinxin2_6.response', xinxin2_6.getRating());
    psychoJS.experiment.addData('xinxin2_6.rt', xinxin2_6.getRT());
    psychoJS.experiment.addData('yilai2_6.response', yilai2_6.getRating());
    psychoJS.experiment.addData('yilai2_6.rt', yilai2_6.getRT());
    psychoJS.experiment.addData('xinren2_6.response', xinren2_6.getRating());
    psychoJS.experiment.addData('xinren2_6.rt', xinren2_6.getRT());
    psychoJS.experiment.addData('button_14.numClicks', button_14.numClicks);
    psychoJS.experiment.addData('button_14.timesOn', button_14.timesOn);
    psychoJS.experiment.addData('button_14.timesOff', button_14.timesOff);
    // the Routine "zu5_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_10_allKeys;
var routine_3Components;
function routine_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_3' ---
    t = 0;
    routine_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('routine_3.started', globalClock.getTime());
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    routine_3Components = [];
    routine_3Components.push(text_6);
    routine_3Components.push(key_resp_10);
    
    for (const thisComponent of routine_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_3' ---
    // get current time
    t = routine_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_3' ---
    for (const thisComponent of routine_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "routine_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
