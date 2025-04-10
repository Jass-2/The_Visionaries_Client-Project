-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 10, 2025 at 07:07 AM
-- Server version: 8.0.35
-- PHP Version: 8.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: bia_db
--

-- --------------------------------------------------------

--
-- Table structure for table contact
--

CREATE TABLE contact (
  id int NOT NULL,
  fname varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  lname varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  message text COLLATE utf8mb4_general_ci NOT NULL,
  submitted_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  email text COLLATE utf8mb4_general_ci NOT NULL,
  phone varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  inquiry enum('general','volunteer') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  country varchar(99) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  wants_updates int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table contact
--

INSERT INTO contact (id, fname, lname, message, submitted_at, email, phone, inquiry, country, wants_updates) VALUES
(1, 'Alish', 'Khan', 'I\'d like to volunteer for the memorial event.', '2025-04-09 00:00:42', 'alish@example.com', '123-456-7890', 'volunteer', NULL, 0),
(2, 'aawdawd', 'adwdawd', 'rgfewertt543', '2025-04-09 23:03:38', 'man@man.man', '12345654321', 'general', 'awdawd', 1),
(3, '13123dad', 'adwdawd', 'adwdawd', '2025-04-09 23:07:23', 'adaw@afaf.com', '345654321', 'general', 'dfghfd', 1),
(4, 'dadawd', 'fadwdaw', 'dadwawd', '2025-04-09 23:25:20', 'adaw@afaf.com', '2345654321', 'general', 'wdefd', 1),
(5, 'aawdawd', 'adwdawd', 'test123', '2025-04-09 23:39:58', 'man@man.man', '6969699', 'general', 'adawdawd', 1);

-- --------------------------------------------------------

--
-- Table structure for table events
--

CREATE TABLE `events` (
  id int NOT NULL,
  title varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  place varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  date varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  description text COLLATE utf8mb4_general_ci NOT NULL,
  article_1 text COLLATE utf8mb4_general_ci NOT NULL,
  posted_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table events
--

INSERT INTO events (id, title, place, date, description, article_1, posted_at) VALUES
(1, 'Charity Banquet', 'City Hall, London, Ontario', 'March 15, 2025', 'Srishti Foundation hosted a formal fundraising banquet in support of the Brothers In Arms Memorial. The event featured speeches, live music, and an auction to raise awareness and funds.', 'On March 15, community members and supporters gathered at City Hall in London, Ontario for a heartfelt evening of remembrance and generosity. The Srishti Foundation’s charity banquet was the first in a series of fundraising events to support the Brothers In Arms Memorial, an initiative commemorating Canadian soldiers who served in World War I.\r\nThe evening included a formal dinner, guest speakers from local veterans’ groups, and a silent auction featuring donated art and memorabilia. Guests shared stories and honored fallen heroes, with all proceeds directed toward the memorial’s construction and educational outreach efforts. Organizers reported strong turnout and overwhelming support.', '2025-04-08 05:53:52'),
(2, 'Memorial Run Draws Big Crowd', 'Victoria Park, London', 'April 10, 2025', 'Hundreds of locals turned out for a 5K run organized by the Srishti Foundation to raise funds for the Brothers In Arms Memorial. The event combined fitness with remembrance.', 'A brisk spring morning didn’t deter over 300 runners and walkers from taking part in the \"Run for Brothers\" 5K event at Victoria Park in Kitchener. Organized by the Srishti Foundation, the run served as both a tribute to Canadian soldiers and a fundraiser for the Brothers In Arms Memorial project.\r\n\r\nParticipants wore bibs bearing the names of fallen WWI soldiers, turning the park path into a moving tribute. Families, students, and veterans joined together, symbolizing unity and resilience. The event concluded with refreshments, speeches, and music by a local high school band, with all donations going directly to the memorial campaign.', '2025-04-08 05:56:50'),
(3, 'Art Show Supports Veterans', 'McMichael Canadian Art Collection', 'April 22, 2025', 'An art exhibition curated by local artists opened in support of the Brothers In Arms Memorial. Proceeds from ticket sales and selected artwork went to Srishti Foundation’s campaign.', 'On April 22, the McMichael Canadian Art Collection hosted an inspiring evening where art met remembrance. The Srishti Foundation partnered with Canadian artists to launch Brushes of Valor, an exhibit that explored themes of war, memory, and national pride—all in support of the Brothers In Arms Memorial.\r\n\r\nGuests explored a variety of pieces from landscapes of Flanders fields to abstract representations of courage. Several artworks were auctioned off, raising over $8,000 for the memorial initiative. The show aimed not just to raise funds, but to evoke reflection on the sacrifices made during wartime.', '2025-04-08 05:56:50'),
(4, 'Candlelight Vigil for the Fallen', 'Riverwalk Commons, Newmarket, Ontario', 'May 5, 2025', 'Residents gathered at dusk for a moving candlelight vigil to honor soldiers remembered in the Brothers In Arms Memorial. Local youth and veterans shared personal tributes.', 'The Riverwalk Commons in Newmarket fell silent as hundreds of flickering candles were lit in solemn remembrance on the evening of May 5. Hosted by the Srishti Foundation, the vigil offered community members a space to mourn, reflect, and honor the legacy of Canadian soldiers from the First World War.\r\n\r\nVeterans shared personal accounts, while local students read letters written by WWI soldiers—a preview of the historical material to be featured in the upcoming Brothers In Arms Memorial. The event underscored the importance of preserving these stories for future generations.', '2025-04-08 05:56:50');

-- --------------------------------------------------------

--
-- Table structure for table letters
--

CREATE TABLE letters (
  id int NOT NULL,
  flname varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  letter text COLLATE utf8mb4_general_ci NOT NULL,
  date varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table letters
--

INSERT INTO letters (id, flname, letter, date) VALUES
(1, 'Muslim officer to his brother', '“Without death there is no victory, but I am alive and very well, and I tell you truly that I will return alive to India”', 'December 1914'),
(2, 'A Garhwali to his father', '“It is very hard to endure the bombs, father. [...] The numbers that have fallen cannot be counted.”', 'January 14th, 1915'),
(3, 'A wounded Sikh to his brother', '“There can be no confidence of life or of seeing again the dear children or of seeing you once more. [...] If I live I will write again”', 'January 18th, 1915'),
(4, 'A wounded Sikh to his father', '“Tell my mother not to go wandering madly because her son, my brother, is dead. To be born and to die is God’s order. Some day we must die, sooner or later, and if I die here, who will remember me? It is a fine thing to die far from home. A saint said this, and, as he was a good man, it must be true.”', 'January 18th, 1915'),
(5, 'A wounded Sikh to his brother', '“The battle is beginning and the men are dying like maggots. No one can count them - not in thousands but in hundreds of thousands of thousands. No one can count them”\r\n', 'January 21st, 1915'),
(6, 'A wounded Punjabi Rajput to a relative ', '“Do not think that this is war. This is not war. It is the ending of the world”\r\n', 'January 29th, 1915'),
(7, 'A South Indian Muslin to a Friend', '“If God enables me to see my people again, I shall look upon it as a new life”', 'February 9th, 1915'),
(8, 'The 20th Deccan Horse', '“What I saw in the course of the advance I shall never forget”\r\n\r\nLetter #356\r\n', 'July 14th, 1916'),
(9, 'Rifleman Amar Singh Rawat (Garhwal Rifles) to a friend', '“The scene was indescribable. If I survive I will tell you all”\r\n\r\n\r\n', 'March 26th, 1915'),
(10, 'Jemadar Khan Muhammad to Lance Naik Sher Khan', '“In this calamity there is also the misfortune of separation from you. O young men, be careful and do not get confused: even if you die, show some bravery! One day we all have to die.”\r\n\r\n\r\n', 'March 1915'),
(11, 'Rifleman Amar Singh Rawat to Dayaram Jhapaliyal', '“The condition of affairs in the war is like leaves falling off a tree, and no empty space remains on the ground. [...] One has to stay on top of the corpses and even sleep on them, because not an empty place remains anywhere [...] Such is the scene and one was powerless. Now I have not any sure confidence that I will see you people again; there is nothing but hopelessness” \r\n\r\n\r\n', 'April 1st, 1915'),
(12, 'A Sikh sepoy to his brother', '“The war is a great sight at night. Here cannons are firing, there machine guns; here there are bright lights, there bombs hurl through the air. Bullets fly day and night incessantly drinking the blood of heroes”\r\n\r\n\r\n', 'April 5th, 1915'),
(13, 'Havildar Ghufran Khan to a friend', '“Our people have many lice in their clothes, and they bite terribly. They are worse than a rifle bullet. But there are no mosquitoes or other creatures which bite mankind, and no snakes or scorpions at all”\r\n\r\n\r\n', 'April 1915'),
(14, 'Jemadar Indar Singh to a family member', '“Don’t be grieved at my death because I shall die arms in hand wearing the warrior’s clothes.  This is the most happy death that anyone can die.  I am very sorry that I have not been able to discharge my obligations towards my family because God has called me already.  Well, never mind you must forgive me.  I have abandoned to you all my worldly possessions which you must make use of without hesitation.  Don’t worry your grandparents after I am gone.  Give my love to my parents and tell them not to grieve as we must all die some day. Indeed this day of death is an occasion for rejoicing”\r\n\r\n', 'September 15th, 1916'),
(15, 'Lt. Hart Leech', 'Just a wee note. I am \"going over the parapet\", and the chances of a \"sub\" getting back alive are about nix. If I do get back, why you can give me the horse laugh. If not this\'ll let you know that I kicked out with my boots on.\r\nI’m going to tell you this in case my company commander forgets. Your son is a soldier, and a dog-gone good one, too, if he does say it himself as shouldn\'t. And if he gets pipped it\'ll be doing his blooming job.', '1916'),
(16, 'Fred Adams', 'This is the first day they have allowed us to write letters since this battle began and I have no doubt you are anxious to hear from me. Well, we have lost an awful lot of our fellows, and to those of us who are left it seems just a miracle that any of us came through alive.\r\nAbout two brigades of Canadians held about five times as many Germans. It would have done you good to see the boys. I did not see one show the white feather, but each had a set face and went right at it.\r\nIt was just a nightmare, a hell, retreating across the ground, with the Jack Johnsons digging great holes and the shrapnel raining down upon us, and the bullets striking everywhere. We could see the boys falling everywhere, and it was just awful to hear them cry out.', '1915'),
(17, 'Lieut. D. Lynn Dudley', 'Any person who went through that Passchendaele Advance can safely say we went through more mud and shell fire than was ever experienced in this God-forsaken hole called Europe.\r\nAlthough we went through a great many hardships, it is impossible to imagine what the Germans had to contend with. They were in a great deal more mud and water than we, and it was simply impossible for man or beast to live under shell fire. The ground we advanced over was simply one mass of dead \'Hunies\' so you will have some idea of the number of men they lost. One prisoner who was captured said the Germans thought the Canadians were superhuman, and would not face them at all. It certainly looked like it, they way they disappeared when we started after them.', '1917'),
(18, 'Capt. Charles Robertson', 'My observer, the South African I told you about, was right on the job, as cool as a cucumber and working his two machine guns as though he were shooting at a bullseye in a shooting gallery. One came up under our tail knowing of course that that is our \"blind\" and defenseless quarter. The other one did half circles around us from one side to the other and both kept pouring a continuous stream of lead into us at anywhere from ten to fifty yards range.\r\nA half dozen or so of the first bullets put our engine out of action and after that of course it was just a case of putting my machine into as many funny positions as possible so as to hamper their aim. That ceaseless pop-pop-pop-pop- on the right, on the left, behind, underneath- and the corresponding phit-phit-phit-phit of the bullets as they went past us or pierced some part of the machine never let either of us forget for a moment that there was a war on, believe me.', '1917'),
(19, 'Cpl. Amos Mayse', 'I tried to find something by which he might be identified but it was impossible – poor boy - in some far away home in Canada some-one is mourning the loss of husband – son or sweetheart - & the saddest of all is, they will never know how he died – or where he is buried, & even now they may be clinging to the hope, that he is still alive, a prisoner, for he would be listed among the missing.\r\nTalk about the “glory of war” there is no glory, it is hellish devilish. We saw places too where the trenches & ground around was literally bloodsoaked & here & there shell holes with blood & water still standing in them.', '1916'),
(20, 'Unknown Author', 'Our Imperial Army & Canada have each sacrificed many of their bravest & best here, & Germany also had paid an awful price for her unholy ambition.\r\nIn my spare time I have braved the occasional bursting shells which Fritz throws over once in a while to let us know that he is still in the vicinity, & wandered over the scene, it is an old German position, one of the strongest they held – considered almost impregnable they say that France alone [censored] of her [censored] take it – It is a high ridge running for miles & which commands a splendid view of the country in every direction, an ideal place for defense.\r\nThe Germans had literally tunneled it hollow, while the face of the slopes was criss-crossed in every direction with well constructed trenches – great & tremendously strong gun emplacements had been built here & there & I have been down old dugouts, which have have been 50 & 60ft down in the earth - we have had to go down 60 steps & then not been at the bottom - & over the face of the ground everywhere a bewildering maze of barbed wire & pointed iron stakes – it seems almost impossible that men could have fought their ways through such a tangle.', '1917'),
(21, 'Cpl. L.G. Baxter', 'Received your kind & welcomed letter & was glad to hear that you were keeping well. I hope you have by now got over the effects of your sad loss. It certainly was very hard indeed for Henry, unfortunate in fact, as he was the first man to go on leave in this \"Batt.\" had he come through. Although he should have had it a long time ago.\r\nJack Foster a close chum of Henry was killed not far from him about the same time they were buried in the \"Batt\" cemetery in front of Thelus beside the nine Elms he had quite a few things in his possession I should have liked to sent them on to you but someone else got them. I do not know who.', 'June 15, 1917'),
(22, 'Andy', 'This is the first day of the new year and I know that you will have just gone to bed and I bet you had a great time. I wish I was there as it is awful cold in the trenches. We nearly froze stiff. I had two days in the dressing station but I am nearly all right again.\r\nWe had a great feed of turkey last night. A big tent was pitched on the snow and we had a fine time then we went to the show. The Boys got up a pantomime called a [blank] in France and there was ladies and fairies all acted out by the soldiers. It was fine. We could hear the guns booming away outside but we forgot all about them.', 'Jan 1, 1917'),
(23, 'Jackson Woods', 'Well Mrs Johns I hardly know how to start this letter. Of course I know you\'s will have received the sad news of poor Earl\'s death. It\'s the hardest thing I ever felt my duty to do, to write and inform you\'s of this news of your dear boy and my best friend.\r\nHe was as brave a soldier as I have ever met and was loved by all who knew him. He did not suffer at all for death came instantly and was buried in a Canadian cemetery.', 'Sept 15, 1917'),
(24, 'Roy', 'Just dropping you a few lines to let you know that I am still well & kicking. It is beastly sloppy now & it looks as though it doesn\'t intend to stop raining until next spring. Those top boots you mentioned will sure come in handy this winter & please stick a few eats & smokes as I\'m beastly hungry.', 'Oct 24, 1917'),
(25, 'J.K. Moffat', 'Your very kind letter was most welcome and I do appreciate your past esteem and consequent sorrow at the loss of our gallant comrade John C. Oxborough. To properly put together a letter extending sympathy and condolence have ever considered beyond my efforts, and as in most cases, we find it a great boon to hand to our padre the known facts of each casualty, by doing so we feel assured that those who mourn are informed and possibly comforted.\r\nOct. 31st Wed - about 5:30 PM Vapour Farm, P______ Ridge. In an advanced outpost. A 4.5 Howitzer shell landed on the ground about three feet distant. A small particle of shrapnel penetrated the head. The body was otherwise unmarked. Death was instantaneous.\r\nThe body was in a kneeling attitude with the left arm encircling the head. The moon came out clear from behind the dark cloudbank. Getting down beside him in the hastily erected breastworks in the mud, I turned the body over, the eyes were closed. His dear kind face that ever bore a sunny smile was strangely white and calm. When we lifted him up could not believe it possible that he was gone from us.', 'Nov 23, 1917'),
(26, 'Sgt. T.J. Simpson', 'It is my painful duty to inform you of the passing out of the finest little chap it has ever been my good fortune to know. This death in action was one of the keenest blows I have ever received and my deep regret, while it can never compare with yours, nevertheless makes me feel very badly indeed.\r\nThe little fellow\'s motto was \"do your best\" and he always lived up to it, loved by all and made a pet of. It never spoiled him, as he was always the same Pete.\r\nHe was found later in the night when things were quiet with two bombs in each pocket and his rifle between his knees. He died as he lived, a little hero.', 'June 11, 1916'),
(27, 'John', 'Just a short line this time to let you know I am as well as ever and standing the cold and wet and mud as well as any of the rest of them for we are having most miserable weather indeed.\r\nThe Germans line is above our level and they pumped all their water out on us and flooded our line, but it\'s all in the game. And if our level was above theirs we\'d have done the same and thought it a good piece of business.\r\nWe find ourselves tonight, 4 days later in a cosy dry dugout with a coke brazier giving off a fine glow and heat in one corner. We have just finished dinner… the cigars which Edna sent have just been passed around. One of the fellows is playing a mouth organ and the whole crew is giving vent to their feelings in song and laughter.', 'Nov 6, 1915'),
(28, 'George', 'Just a line to let you know that we are both all right for which we must thank God for we have been through a terrible ordeal. I cannot describe it in words but I know there has been nothing worse in this war.\r\nWe had to stay in that trench for 8 hours without water & no food but about two dry biscuits each. It was up to our shoe tops in water and we got all stiffened & cramped up. We were thankful when the relief came at last.\r\nThe wounded were very brave and bore the pain and suffering like heroes, and some had ghastly wounds. I expect to be home soon now then I can give you a good account of it.', '1916'),
(29, 'A. MacKinnon', 'Received your note yesterday and sorry to hear about Ronnie. He done what he could and now it is all over. So we will have to be reconciled to the will of our Father in Heaven. It is hard on us all but it is worse for Lilly and the children.\r\nShould they try to force you into the army after you are 18 come home. Don\'t join up. It will be no disgrace for you. Your brothers have done your bit. It looks as if the war will not be over for a long time.', '1917'),
(30, 'Unknown Author', 'Dear Mother\r\nJust a line to let you know that we are both all right for which we must thank God for we have been through a terrible ordeal. I don\'t know if I am allowed to say much about it but you will see by the papers what a fierce fight the Canadians have been into. How we Mart & I came through without a scratch I cannot tell as we have had terrible losses. It has been simply awful. I cannot describe it in words but I know there has been nothing worse in this war.\r\nWe did our eight days in alright and were bombarded pretty heavy all the time but did not suffer much. Then we came out for a rest. The next night they broke through and we had to go back. We had to make a charge in broad daylight but they were ready for us and opened up an awful fire on us. We took what cover we could get in old trenches and were there all day.\r\nThe force of the explosion threw us down and I couldn\'t hear anything but ringing in my ears. I was hit on the head about four times but my steel helmet saved me. Then I had a bullet go right through a mess tin strapped on my back. I am going to keep it as a souvenir.', '1916'),
(31, 'J.K. Moffat', 'Dear Miss Smith\r\nYour very kind letter was most welcome and I do appreciate your past esteem and consequent sorrow at the loss of our gallant comrade John C. Oxborough.\r\nThe body was in a kneeling attitude with the left arm encircling the head. The moon came out clear from behind the dark cloudbank. Getting down beside him in the hastily erected breastworks in the mud, I turned the body over. The eyes were closed. His dear kind face that ever bore a sunny smile was strangely white and calm.\r\nIt is one of our most highly cherished memories that shall ever remain fresh and green.', '1917'),
(32, 'Sgt. T.J. Simpson', 'Mr. Henry Newman\r\nIt is my painful duty to inform you of the passing out of the finest little chap it has ever been my good fortune to know. His death in action was one of the keenest blows I have ever received.\r\nHe was left alone with his gun, cut off from all assistance, when he made his last try. He removed his gun and started up what remained of the trench. Meeting a company man he said to him, \"Take the Machine Gun out. I\'m all in. I\'ve done my best.\"\r\nThe man took the Machine Gun from him and just then a shell burst almost on top of them. When the fellow had dug himself out, he looked around for Pete and saw him laying on his back with his hands folded across his breast—at rest with the world at last.', '1916');

-- --------------------------------------------------------

--
-- Table structure for table media_events
--

CREATE TABLE media_events (
  id int NOT NULL,
  media_name varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  media_type enum('vid','img') COLLATE utf8mb4_general_ci NOT NULL,
  media_url varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  event_id int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table media_events
--

INSERT INTO media_events (id, media_name, media_type, media_url, event_id) VALUES
(1, 'Event 1 preview', 'img', 'Event1.png', 1),
(2, 'Event 2 preview', 'img', 'Event2.png', 2),
(3, 'Event 3 preview', 'img', 'Event3.png', 3),
(4, 'Event 4 preview', 'img', 'Event4.png', 4);

-- --------------------------------------------------------

--
-- Table structure for table media_news
--

CREATE TABLE media_news (
  id int NOT NULL,
  media_name varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  media_type enum('vid','img') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  media_url varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  news_id int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table media_news
--

INSERT INTO media_news (id, media_name, media_type, media_url, news_id) VALUES
(1, 'News 1', 'img', 'News1.png', 1),
(2, 'News 2', 'img', 'News2.png', 2),
(3, 'News 3', 'img', 'News3.png', 3),
(4, 'News 4', 'img', 'News4.png', 4);

-- --------------------------------------------------------

--
-- Table structure for table news
--

CREATE TABLE news (
  id int NOT NULL,
  title varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  place varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  date varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  description text COLLATE utf8mb4_general_ci NOT NULL,
  article_1 text COLLATE utf8mb4_general_ci NOT NULL,
  posted_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table news
--

INSERT INTO news (id, title, place, date, description, article_1, posted_at) VALUES
(1, 'Charity Banquet Raises Funds for War Memorial', 'City Hall, London, Ontario', 'March 15, 2025', 'The Srishti Foundation hosted a formal charity banquet to support its Brothers In Arms Memorial project. The event drew a full house, raising both awareness and substantial donations.', 'LONDON, ON — A formal charity banquet organized by the Srishti Foundation drew over 200 guests to City Hall on March 15, all united in a common goal: to honor the memory of Canadian soldiers through the upcoming Brothers In Arms Memorial.\r\nAttendees were treated to a sit-down dinner, live string music, and a keynote address by a retired lieutenant-colonel who shared stories from the frontlines. A silent auction featured donated items from local artists and businesses. Organizers confirmed that the evening raised more than $18,000 for the memorial fund.', '2025-04-08 06:02:59'),
(2, 'Hundreds Attend Memorial Run for Veterans', 'Victoria Park', 'April 10, 2025', 'More than 300 participants turned out for a community 5K to support the Brothers In Arms Memorial. The run raised awareness for the foundation’s WWI remembrance efforts.', 'KITCHENER, ON — Community members laced up their running shoes on April 10 for a 5K memorial run at Victoria Park, hosted by the Srishti Foundation. The event was part of a broader fundraising initiative for the Brothers In Arms Memorial, which aims to commemorate Canadian soldiers from World War I.\r\n\r\nParticipants ranged from local students to veterans and city councillors, many wearing bibs with soldier names. The event concluded with a reading of wartime letters and a collective moment of silence. Proceeds from registration and donations went directly to the memorial project.', '2025-04-08 06:02:59'),
(3, 'Art Exhibit Pays Tribute to WWI Soldiers', 'McMichael Canadian Art Collection', 'April 22, 2025', 'A collaborative art exhibition opened to the public as a fundraiser for the Brothers In Arms Memorial. Local artists donated works themed around war, memory, and sacrifice.', 'VAUGHAN, ON — The McMichael Canadian Art Collection welcomed visitors on April 22 for the launch of a special exhibit supporting the Srishti Foundation’s Brothers In Arms Memorial. The exhibit, titled Brushes of Valor, featured over 30 works inspired by the lives and legacies of soldiers from the First World War.\r\n\r\nAll ticket proceeds and select artwork sales went to the memorial fund. Organizers said the exhibit seeks not only to raise funds but to spark dialogue about the human cost of war and the importance of historical memory.\r\n\r\n', '2025-04-08 06:02:59'),
(4, 'Candlelight Vigil Honors the Fallen', 'Riverwalk Commons', 'May 5, 2025', 'A candlelight vigil brought together community members to reflect on the sacrifices of Canadian soldiers. The event was part of the Brothers In Arms campaign.', 'NEWMARKET, ON — Hundreds gathered at Riverwalk Commons on May 5 for a solemn candlelight vigil in remembrance of Canada’s fallen soldiers. The event, organized by the Srishti Foundation, is one of several efforts underway to build public support for the Brothers In Arms Memorial.\r\n\r\nCandles were lit one by one as letters from soldiers were read aloud by local students. Veterans and family members also spoke, drawing emotional responses from the crowd. “It was beautiful, moving, and necessary,” said one attendee.', '2025-04-08 06:02:59');

-- --------------------------------------------------------

--
-- Table structure for table testimonials
--

CREATE TABLE testimonials (
  id int NOT NULL,
  flname varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  amount varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table testimonials
--

INSERT INTO testimonials (id, flname, amount) VALUES
(1, 'Amira Singh', 'CAD $250'),
(2, 'Daniel Kim', 'CAD $500'),
(3, 'Sophie Tremblay', 'CAD $100'),
(4, 'Liam O\'Reilly', 'CAD $1,000'),
(5, 'Jasmeet Dhaliwal', 'CAD $750'),
(6, 'Isabella Roy', 'CAD $200'),
(7, 'Noah Patel', 'CAD $1,500'),
(8, 'Emily Zhao', 'CAD $300'),
(9, 'Marcus Lefebvre', 'CAD $120'),
(10, 'Ava Thompson', 'CAD $2,000');

-- --------------------------------------------------------

--
-- Table structure for table timeline
--

CREATE TABLE timeline (
  id int NOT NULL,
  title varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  timespan varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `desc` text COLLATE utf8mb4_general_ci NOT NULL,
  img_url text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table timeline
--

INSERT INTO timeline (id, title, timespan, `desc`, img_url) VALUES
(1, 'Concept & Planning', 'January – March 2024', 'Initial vision, research, and design planning for the Brothers In Arms Memorial. Key stakeholders met to define goals and scope.', 'timeline-img1.png'),
(2, 'Fundraising Launch', ' April – August 2025', 'Public campaign began to raise funds through events, online donations, and community outreach. Partnerships and sponsorships were secured.', 'timeline-img2.png'),
(3, 'Design Finalization', 'September – October 2025', 'Architects and historians collaborated to finalize the design, incorporating community feedback and historical accuracy.', 'timeline-img3.png'),
(4, 'Construction Begins', 'November 2025 – March 2026', 'Groundbreaking and foundational work commenced. Site preparation and monument structure installation began.', 'timeline-img4.png'),
(5, 'Installation & Detailing', 'April – May 2026', 'Key elements such as plaques, lighting, and landscaping were added. Digital features and tribute wall were integrated.', 'timeline-img5.png'),
(6, 'Official Unveiling', 'June 2025', 'Memorial was officially unveiled to the public in a community ceremony with veterans, donors, and families in attendance.', 'timeline-img6.png');

-- --------------------------------------------------------

--
-- Table structure for table wall
--

CREATE TABLE wall (
  id int NOT NULL,
  name varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  message text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table wall
--

INSERT INTO wall (id, name, message) VALUES
(1, 'Emma Reynolds', '\"In memory of my great-grandfather who served with honour. We will never forget your sacrifice.\"'),
(2, 'Jared Thompson', '\"To those who gave their lives for our freedom—thank you. Your courage inspires us every day.\"'),
(3, 'Maya Kapoor', '\"Though I never met you, your bravery lives on in our stories. Rest in peace.\"'),
(4, 'Lucas Nguyen', '\"We remember, always. Your strength and sacrifice shaped our history.\"'),
(5, 'Sabrina Clarke', '\"You stood for something greater than yourself. I am forever grateful.\"'),
(6, 'Andre Pelletier', '\"From generation to generation, we carry your memory. Merci pour tout.\"'),
(7, 'Olivia Scott', '\"To the heroes we lost—you are not forgotten. This memorial keeps your light alive.\"'),
(8, 'Ethan Morales', '\"You gave everything, and we remember everything. Thank you for your service.\"'),
(9, 'Nadia Ali', '\"Your bravery made our future possible. We walk in your footsteps with pride.\"'),
(10, 'Connor Fraser', '\"Gone but not forgotten. Your sacrifice will echo through the ages.\"');

--
-- Indexes for dumped tables
--

--
-- Indexes for table contact
--
ALTER TABLE contact
  ADD PRIMARY KEY (id);

--
-- Indexes for table events
--
ALTER TABLE events
  ADD PRIMARY KEY (id);

--
-- Indexes for table letters
--
ALTER TABLE letters
  ADD PRIMARY KEY (id);

--
-- Indexes for table media_events
--
ALTER TABLE media_events
  ADD PRIMARY KEY (id),
  ADD KEY event_id (event_id);

--
-- Indexes for table media_news
--
ALTER TABLE media_news
  ADD PRIMARY KEY (id),
  ADD KEY event_id (news_id);

--
-- Indexes for table news
--
ALTER TABLE news
  ADD PRIMARY KEY (id);

--
-- Indexes for table testimonials
--
ALTER TABLE testimonials
  ADD PRIMARY KEY (id);

--
-- Indexes for table timeline
--
ALTER TABLE timeline
  ADD PRIMARY KEY (id);

--
-- Indexes for table wall
--
ALTER TABLE wall
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table contact
--
ALTER TABLE contact
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table events
--
ALTER TABLE events
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table letters
--
ALTER TABLE letters
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table media_events
--
ALTER TABLE media_events
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table media_news
--
ALTER TABLE media_news
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table news
--
ALTER TABLE news
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table testimonials
--
ALTER TABLE testimonials
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table timeline
--
ALTER TABLE timeline
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table wall
--
ALTER TABLE wall
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table media_events
--
ALTER TABLE media_events
  ADD CONSTRAINT media_events_ibfk_1 FOREIGN KEY (event_id) REFERENCES `events` (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table media_news
--
ALTER TABLE media_news
  ADD CONSTRAINT media_news_ibfk_1 FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
