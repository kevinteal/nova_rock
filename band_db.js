// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//main stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		
		
		//friday blue stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (1, "Vinegar Hill", "Blue Stage", 20150612, 1300, 1335, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (2, "Deathstars", "Blue Stage", 20150612, 1400, 1445, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (3, "Life Of Agony", "Blue Stage", 20150612, 1510, 1600, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (4, "Godsmack", "Blue Stage", 20150612, 1630, 1720, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (5, "Parkway Drive", "Blue Stage", 20150612, 1750, 1845, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (6, "Mastodon", "Blue Stage", 20150612, 1915, 2010, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (7, "Lamb Of God", "Blue Stage", 20150612, 2040, 2145, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (8, "Motley Crue", "Blue Stage", 20150612, 2225, 2355, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (9, "Scooter", "Blue Stage", 20150612, 0030, 0130, 0, 0, "Friday", "video_link_HERE")');
		
		
		//saturday blue stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (10, "Turbobier", "Blue Stage", 20150613, 1300, 1330, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (11, "Blues Pills", "Blue Stage", 20150613, 1350, 1425, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (12, "L7", "Blue Stage", 20150613, 1445, 1525, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (13, "Frank Turner", "Blue Stage", 20150613, 1550, 1640, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (14, "Rea Garvey", "Blue Stage", 20150613, 1710, 1805, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (15, "Kraftklub", "Blue Stage", 20150613, 1835, 1935, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (16, "Die Fantastischen Vier", "Blue Stage", 20150613, 2005, 2120, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (17, "Die Toten Hosen", "Blue Stage", 20150613, 2200, 0000, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (18, "Wolfgang Ambros", "Blue Stage", 20150613, 0030, 0130, 0, 0, "Saturday", "video_link_HERE")');
		
		//sunday blue stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (19, "Beyond The Black", "Blue Stage", 20150614, 1330, 1400, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (20, "Powerwolf", "Blue Stage", 20150614, 1420, 1500, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (21, "Eluveitie", "Blue Stage", 20150614, 1525, 1610, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (22, "All That Remains", "Blue Stage", 20150614, 1635, 1725, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (23, "Hollywood Undead", "Blue Stage", 20150614, 1750, 1840, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (24, "Five Finger Death Punch", "Blue Stage", 20150614, 1910, 2010, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (25, "Motorhead", "Blue Stage", 20150614, 2040, 2150, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (26, "Slipknot", "Blue Stage", 20150614, 2230, 0000, 0, 0, "Sunday", "video_link_HERE")');
		
		//friday red stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (27, "Mothers Cake", "Red Stage", 20150612, 1250, 1320, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (28, "Feine Sahne Fischfilet", "Red Stage", 20150612, 1340, 1420, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (29, "Backyard Babies", "Red Stage", 20150612, 1440, 1525, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (30, "All Time Low", "Red Stage", 20150612, 1550, 1635, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (31, "Yellowcard", "Red Stage", 20150612, 1705, 1750, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (32, "Guano Apes", "Red Stage", 20150612, 1820, 1920, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (33, "Eagles Of Death Metal", "Red Stage", 20150612, 1950, 2055, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (34, "Rise Against", "Red Stage", 20150612, 2125, 2235, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (35, "Beatsteaks", "Red Stage", 20150612, 2305, 0030, 0, 1, "Friday", "video_link_HERE")');
		
		//saturday red stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (36, "The Answer", "Red Stage", 20150613, 1330, 1400, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (37, "Callejon", "Red Stage", 20150613, 1420, 1455, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (38, "Asking Alexandria", "Red Stage", 20150613, 1520, 1605, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (39, "Epica", "Red Stage", 20150613, 1630, 1730, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (40, "In Extremo", "Red Stage", 20150613, 1800, 1905, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (41, "Papa Roach", "Red Stage", 20150613, 1935, 2050, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (42, "In Flames", "Red Stage", 20150613, 2120, 2240, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (43, "Nightwish", "Red Stage", 20150613, 2320, 0050, 0, 1, "Saturday", "video_link_HERE")');
		
		//sunday red stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (44, "Wendis Bohmische Blasmusik", "Red Stage", 20150614, 1130, 1210, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (45, "Alkbottle", "Red Stage", 20150614, 1220, 1310, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (46, "Moop Mama", "Red Stage", 20150614, 1335, 1415, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (47, "Fiva", "Red Stage", 20150614, 1440, 1525, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (48, "Jennifer Rostock", "Red Stage", 20150614, 1550, 1640, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (49, "Madsen", "Red Stage", 20150614, 1705, 1805, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (50, "The Gaslight Anthem", "Red Stage", 20150614, 1835, 1940, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (51, "Farin Urlaub Racing Team", "Red Stage", 20150614, 2010, 2125, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (52, "Deichkind", "Red Stage", 20150614, 2205, 2335, 0, 1, "Sunday", "video_link_HERE")');
		
		//friday red bull brandwagen stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (53, "Noluntas", "Red Bull Brandwagen Stage", 20150612, 1400, 1430, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (54, "Companion", "Red Bull Brandwagen Stage", 20150612, 1500, 1530, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (55, "Drescher", "Red Bull Brandwagen Stage", 20150612, 1600, 1640, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (56, "Friska Viljor", "Red Bull Brandwagen Stage", 20150612, 1710, 1750, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (57, "Code Orange", "Red Bull Brandwagen Stage", 20150612, 1820, 1910, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (58, "Mambo Kurt", "Red Bull Brandwagen Stage", 20150612, 1940, 2030, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (59, "Lagwagon", "Red Bull Brandwagen Stage", 20150612, 2100, 2220, 0, 2, "Friday", "video_link_HERE")');
		
		//sat red bull brandwagen stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (60, "Matt Valentine", "Red Bull Brandwagen Stage", 20150613, 1400, 1430, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (61, "Lost In Despair", "Red Bull Brandwagen Stage", 20150613, 1500, 1530, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (62, "Milk", "Red Bull Brandwagen Stage", 20150613, 1600, 1640, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (63, "Betontod", "Red Bull Brandwagen Stage", 20150613, 1710, 1750, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (64, "Heisskalt", "Red Bull Brandwagen Stage", 20150613, 1820, 1910, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (65, "Rakede", "Red Bull Brandwagen Stage", 20150613, 1940, 2030, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (66, "Solstafir", "Red Bull Brandwagen Stage", 20150613, 2100, 2220, 0, 2, "Saturday", "video_link_HERE")');
		
		//sat red bull brandwagen stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (67, "Empty Flags", "Red Bull Brandwagen Stage", 20150614, 1400, 1430, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (68, "Pann Bay Bastards", "Red Bull Brandwagen Stage", 20150614, 1500, 1530, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (69, "Silius", "Red Bull Brandwagen Stage", 20150614, 1600, 1640, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (70, "All Faces Down", "Red Bull Brandwagen Stage", 20150614, 1710, 1750, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (71, "Antilopen Gang", "Red Bull Brandwagen Stage", 20150614, 1820, 1910, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (72, "Northlane", "Red Bull Brandwagen Stage", 20150614, 1940, 2030, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (73, "Orchid", "Red Bull Brandwagen Stage", 20150614, 2100, 2220, 0, 2, "Sunday", "video_link_HERE")');
		
		set_up_main_page();
		
		
	
	});
	
	
	
	
}













