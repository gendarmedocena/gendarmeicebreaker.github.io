"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entry = function (_React$Component) {
  _inherits(Entry, _React$Component);

  function Entry(props) {
    _classCallCheck(this, Entry);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      border_width: 1
    };
    return _this;
  }

  Entry.prototype.changeBorder = function changeBorder() {
    this.setState({ border_width: 10 });
  };

  Entry.prototype.changeBorderBack = function changeBorderBack() {
    this.setState({ border_width: 5 });
  };

  Entry.prototype.render = function render() {
    return React.createElement(
      "div",
      { onMouseUp: this.changeBorderBack.bind(this), onMouseDown: this.changeBorder.bind(this), style: { border: this.state.border_width + "px solid " + this.props.color, margin: 50, padding: 25 } },
      React.createElement(
        "h3",
        null,
        this.props.title
      ),
      React.createElement("img", { style: { width: 200 }, src: this.props.img_src }),
      React.createElement(
        "p",
        null,
        this.props.text
      )
    );
  };

  return Entry;
}(React.Component);

var Blog = function (_React$Component2) {
  _inherits(Blog, _React$Component2);

  function Blog(props) {
    _classCallCheck(this, Blog);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = {
      title_color: "black",
      entry_number: 0 //This is kind of silly. Use 0 with function or 1000
    };
    return _this2;
  }

  Blog.prototype.changeTitleColor = function changeTitleColor() {
    this.setState({ title_color: "purple" });
  };

  Blog.prototype.changeTitleColorBack = function changeTitleColorBack() {
    this.setState({ title_color: "black" });
  };

  Blog.prototype.previousEntry = function previousEntry() {
    this.setState({ entry_number: this.state.entry_number - 1 });
  };

  Blog.prototype.nextEntry = function nextEntry() {
    this.setState({ entry_number: this.state.entry_number + 1 });
  };

  Blog.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "center",
        null,
        React.createElement(
          "h1",
          { onMouseDown: this.changeTitleColor.bind(this), onMouseUp: this.changeTitleColorBack.bind(this), style: { color: this.state.title_color } },
          "The Ice Breaker Game"
        ),
        React.createElement(
          "button",
          { onClick: this.previousEntry.bind(this) },
          "Previous"
        ),
        React.createElement(
          "button",
          { onClick: this.nextEntry.bind(this) },
          "Next"
        )
      ),
      this.displayCurrentEntry()
    );
  };

  Blog.prototype.actualEntryNumber = function actualEntryNumber() {
    if (this.state.entry_number < 0) {
      return (21 - this.state.entry_number) % 21;
    } else {
      return this.state.entry_number % 21;
    }
  };

  Blog.prototype.displayCurrentEntry = function displayCurrentEntry() {
    var entry_number = this.actualEntryNumber();

    if (entry_number == 0) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "What is the best part of your job?", img_src: "https://altoday.com/wp-content/uploads/2015/11/jobless-rate-unemployment-jobs.jpg", color: "blue" }),
      " "
    );

    if (entry_number == 1) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "If you could be any animal what would it be and why?", img_src: "https://www.cambridgema.gov/~/media/Images/sharedphotos/departmentphotos/animal.jpg", color: "green" }),
      " "
    );

    if (entry_number == 2) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "Who was the most influential person in your career choice?", img_src: "https://notsopublic.com/wp-content/uploads/sites/2/2016/08/02034511/People-II-Modified.png", color: "purple" }),
      " "
    );

    if (entry_number == 3) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "Would you rather be able to control fire or water?", img_src: "https://www.joyyoga.com.au/wp-content/uploads/2017/02/25744.jpg", color: "red" }),
      " "
    );

    if (entry_number == 4) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "What's the best technique you have been using to better manage your time?", img_src: "https://www.jobhuntersbible.com/assets/images/uploads/Screen%20Shot%202014-12-14%20at%2011.40.48%20PM.png", color: "black" }),
      " "
    );

    if (entry_number == 5) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "What was your best decision in the last year?", img_src: "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAS4AAAAJGVkMDg4NDllLTc0MGItNDFhYi1hZTk2LTZkZjc2ZjNkNzBmOA.jpg", color: "orange" }),
      " "
    );

    if (entry_number == 6) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "What sport would be the funniest to add a mandatory amount of alcohol to?", img_src: "https://d6vze32yv269z.cloudfront.net/organizations/b0999730-c98f-417c-9dfb-edbfde591991/blocks/9080f135-6087-4d5e-acc5-cacabef54291/hpfulq-1234.jpg", color: "blue" }),
      " "
    );

    if (entry_number == 7) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "If you could have any job and money was not an issue what would it be and why?", img_src: "https://good.co/blog/wp-content/uploads/2014/03/Optimized-shutterstock_111469742-720x480.jpg", color: "white" }),
      " "
    );

    if (entry_number == 8) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "If someone asked to be your apprentice and learn all that you know, what would you teach them?", img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Apprenticeship.jpg/220px-Apprenticeship.jpg", color: "purple" }),
      " "
    );

    if (entry_number == 9) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "How much do you follow the news?", img_src: "https://fedoforg.org/wp-content/uploads/2016/10/01.jpg", color: "green" }),
      " "
    );

    if (entry_number == 10) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "What are your plans for the weekend?", img_src: "https://www.cheatsheet.com/wp-content/uploads/2015/07/Weekend-Just-Ahead.jpg", color: "black" }),
      " "
    );

    if (entry_number == 11) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "What do you do in your free time?", img_src: "https://blog.sdltrados.com/wp-content/uploads/2016/09/4-stress-free-time-management-tips-to-boost-translation-productivity.png", color: "blue" }),
      " "
    );

    if (entry_number == 12) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "Who are some of your favorite actors or actresses?", img_src: "https://4.bp.blogspot.com/-sYAOh0WR9w8/Tb42kvvGoiI/AAAAAAAAB5A/T6vatUakWC4/s1600/Beautiful+People.jpg", color: "red" }),
      " "
    );

    if (entry_number == 13) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "If you could replace your arm with any kind of imaginary arm what would it be?", img_src: "http://images.clipartpanda.com/arm-clipart-arm-hand-md.png", color: "yellow" }),
      " "
    );

    if (entry_number == 14) https: //i.ytimg.com/vi/txaMzn3iBHk/maxresdefault.jpg
    return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "Would you rather be able to talk to land animals, animals that fly, or animals that live under the water?", img_src: "https://i.ytimg.com/vi/txaMzn3iBHk/maxresdefault.jpg", color: "purple" }),
      " "
    );

    if (entry_number == 15) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "What kind of music are you into?", img_src: "https://az616578.vo.msecnd.net/files/2015/12/19/6358614596527738711752945771_music.jpg", color: "purple" }),
      " "
    );

    if (entry_number == 16) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "Would you rather never use social media sites / apps again or never watch another movie or TV show?", img_src: "http://socialbarrel.com/wp-content/uploads/2016/11/Social-Media-TV.jpg", color: "purple" }),
      " "
    );

    if (entry_number == 17) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "Would you rather give up bathing for a month or give up the internet for a month?", img_src: "https://www.goldenrural.org/wp-content/uploads/2016/04/internet.jpg", color: "purple" }),
      " "
    );

    if (entry_number == 18) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "If you could have an imaginary pet what would it be and why?", img_src: "https://1.bp.blogspot.com/-5rJQunSLIMA/V5dodJVi21I/AAAAAAAAiE4/GrrZ3v7YtEYrveLwqOcjEQWZixs43R3DQCLcB/s1600/pet%2Bplan%2Bdrawing%2B2.jpg", color: "yellow" }),
      " "
    );

    if (entry_number == 19) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "What is one thing that annoys you the most?", img_src: "https://lh4.ggpht.com/qLbdneVfyy1X_DdaRZQym9txxo2eJdpm6jCnjvKXItFSUDfVj7Mm6_BR5OMl2jS_BhA_=w300", color: "white" }),
      " "
    );

    if (entry_number == 20) return React.createElement(
      "center",
      null,
      " ",
      React.createElement(Entry, { title: "", text: "Would you rather be a famous director or a famous actor?", img_src: "https://i2.cdn.cnn.com/cnnnext/dam/assets/160229084143-01-leonardo-dicaprio-0229-super-169.jpg", color: "yellow" }),
      " "
    );
  };

  return Blog;
}(React.Component);

//Here is some boring code that all react apps have

React.render(React.createElement(Blog, null), document.getElementById('app'));