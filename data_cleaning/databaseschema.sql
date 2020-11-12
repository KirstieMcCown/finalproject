-- Mothers Tables to Hold All Clean Data -- 

create table mothers (
	index int,
	age_group int,
	topic varchar,
	topic_disaggregation varchar,
	year int,
	count int,
	year_total int,
	percent_total float,
);

create table mothersbirthcountry (
	index int,
	babies_term varchar,
	topic varchar,
	topic_disaggregation varchar,
	year int,
	count int,
	year_total int,
	percent_total float
);

create table birthlocation (
	index int,
	place_of_birth varchar,
	topic varchar,
	topic_disaggregation varchar,
	year int,
	count int,
	year_total int,
	percent_total float
);


-- Mothers Tables to Hold Data for Plots -- 
-- From mothers table

create table yearcount (
	index int,
	year int,
	count int,
	year_percent float,
	average_age float
);

-- Average age table - no need to manipulate to push back

create table averageage (
	index int,
	chapter varchar,
	topic varchar,
	year int,
	count int,
	average_age float
);

-- Birth state table 

create table birthstate (
	year int,
	topic_disaggregation varchar,
	lat float, 
	long float,
	count int
);




-- Babies Tables to Hold All Clean Data -- 

create table babies (
	index int,
	babies_term varchar,
	topic varchar,
	topic_disaggregation varchar,
	year int,
	count int,
	year_total int,
	percent_total float

);


-- Babies Tables to Hold Data For Plots -- 

create table termbabiescount (
	index int,
	year int,
	babies_term varchar,
	topic_disaggregation varchar,
	babies_count int

);

create table babiessexcount (
	index int,
	babies_term varchar,
	topic_disaggregation varchar,
	babies_count int

);

-- Adoption Tables to Hold All Clean Data -- 

create table numberchildrenadopted (
	index int,
	year int,
	nsw int,
	vic int,
	qld int,
	wa int,
	sa int,
	tas int,
	act int,
	nt int
	
);

create table adoptionsbytype (
	index int,
	year int,
	children_adopted_from_australia int,
	percent_from_australia float,
	children_adopted_from_overseas int,
	percent_from_overseas float
	
);

create table ageofbirthmother (
	index int,
	year int,
	marital_status varchar,
	twenty int,
	twentyfour int,
	twentynine int,
	thirtyfour int,
	thirtynine int, 
	fourty int
	
);

create table adoptionbyageandgender (
	index int,
	year int,
	sex varchar,
	one int,
	four int,
	nine int,
	ten int,
	total int
	
);

create table parentrelationship (
	index int,
	year int,
	step_parent int,
	relatives int,
	carer int,
	other int,
	total int
	
);

create table adoptiveparentrelationship (
	index int,
	year int,
	adoption_by_relatives int,
	adoption_by_non_relatives int,
	total int
	
);

create table typeofadoption (
	index int,
	year int,
	intercountry int,
	local int,
	known int,
	total int
	
);

create table intercountry_bycountryoforigin (
	index int,
	country_of_birth varchar,
	year_2010 int,
	year_2011 int,
	year_2012 int,
	year_2013 int,
	year_2014 int, 
	year_2015 int,
	year_2016 int,
	year_2017 int,
	year_2018 int,
	total int
	
);

create table intercountry_byagegroup (
	index int,
	year int,
	one int,
	four int,
	nine int,
	ten int,
	total int
	
);

create table intercountry_bysiblinggroup (
	index int,
	year int,
	number_sibling_groups int,
	children_adopted_in_sibling_group int
	
);

create table adoptionprocesstime (
	index int,
	year int,
	age_group int,
	months_for_approval int,
	months_before_file_sent int,
	months_from_file_sent_to_child_allocated int,
	months_from_time_child_allocated_to_placed int,
	overall_months_to_adopt int
	
);