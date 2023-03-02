--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0,
    "userId" integer NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (6, 'https://github.com/Dickson-Pinheiro/projeto14-mywallet-back/blob/main/src/controllers/userController.js', 'BxvAJptmmk', 0, 1);
INSERT INTO public.urls VALUES (7, 'https://github.com/Dickson-Pinheiro/projeto14-mywallet-back/blob/main/src/controllers/userController.js', 'hRWMTsZo-l', 0, 1);
INSERT INTO public.urls VALUES (9, 'https://github.com/Dickson-Pinheiro/projeto14-mywallet-back/blob/main/src/controllers/userController.js', 'oZVXMe-tGd', 0, 1);
INSERT INTO public.urls VALUES (10, 'https://github.com/Dickson-Pinheiro/projeto14-mywallet-back/blob/main/src/controllers/userController.js', '4dISUIOiGI', 0, 1);
INSERT INTO public.urls VALUES (8, 'https://github.com/Dickson-Pinheiro/projeto14-mywallet-back/blob/main/src/controllers/userController.js', 'ov3R2HojAU', 1, 1);
INSERT INTO public.urls VALUES (11, 'https://www.google.com/search?q=order+by&sxsrf=AJOqlzVo_FwuEyOL7CEyj76GPvgtMIAPTg%3A1677787308028&ei=rAABZMigAZnT1sQPo4uSwAE&oq=order+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgoIABCxAxCDARBDMgoIABCxAxCDARBDMgsIABCABBCxAxCDATIECAAQQzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOhEILhCABBCxAxCDARDHARDRAzoRCC4QsQMQgwEQxwEQ0QMQ1AI6CAgAELEDEIMBOgcIIxCxAhAnOhMILhCABBCxAxCDARDHARDRAxAKOgUILhCABDoNCAAQgAQQsQMQgwEQCjoLCC4QgAQQxwEQrwE6BwgAEIAEEAo6CAgAEIAEELEDSgQIQRgAUABYhBBgtxxoAnABeACAAaICiAHfDJIBBTAuNS4zmAEAoAEBwAEB&sclient=gws-wiz-serp', '9Bn4_MmbL8', 1, 2);
INSERT INTO public.urls VALUES (12, 'https://www.google.com/search?q=order+by&sxsrf=AJOqlzVo_FwuEyOL7CEyj76GPvgtMIAPTg%3A1677787308028&ei=rAABZMigAZnT1sQPo4uSwAE&oq=order+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgoIABCxAxCDARBDMgoIABCxAxCDARBDMgsIABCABBCxAxCDATIECAAQQzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOhEILhCABBCxAxCDARDHARDRAzoRCC4QsQMQgwEQxwEQ0QMQ1AI6CAgAELEDEIMBOgcIIxCxAhAnOhMILhCABBCxAxCDARDHARDRAxAKOgUILhCABDoNCAAQgAQQsQMQgwEQCjoLCC4QgAQQxwEQrwE6BwgAEIAEEAo6CAgAEIAEELEDSgQIQRgAUABYhBBgtxxoAnABeACAAaICiAHfDJIBBTAuNS4zmAEAoAEBwAEB&sclient=gws-wiz-serp', 'BChI2yB4kJ', 1, 1);
INSERT INTO public.urls VALUES (13, 'https://www.youtube.com/results?search_query=json+build+objec+postgres', 'MBY96XxiVG', 0, 2);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Dickson', 'dicksonpinheiro4@gmail.com', '$2b$10$FnBtM8eghFlX11S82JfO7.YNIUXCgQvgld1K77RCbjWBbtRdZhbgS');
INSERT INTO public.users VALUES (2, 'Dennis', 'dennispinheiro97@gmail.com', '$2b$10$V4nXyejarNTb//IeqdRZYOgyXAL1KR5ZyoZ5iOMgSu8kukNs66ez.');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 13, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

