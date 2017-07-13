FROM continuumio/anaconda3
MAINTAINER Corey Chivers <corey.chivers@uphs.upenn.edu>
RUN apt-get update && apt-get install -y \
	freetds-dev \
	g++ \
&& rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
RUN jupyter notebook --generate-config && echo 'c.NotebookApp.token = ""\r\nc.NotebookApp.password = ""\r\n' >> /root/.jupyter/jupyter_notebook_config.py
CMD [ "jupyter", "notebook", "--notebook-dir=/opt/notebooks", "--ip='*'", "--port=40000", "--no-browser" ]
